// 1/ Populate data for Overview section: 
async function getOverviewData() {
    const fetchData = await fetch("../data/data.json")
    const result = await fetchData.json();

    const overviewData = result.Overview;
    const overviewContainer = document.getElementById('OverviewStatus');

    const keys = Object.keys(overviewData).filter(key => key.endsWith("_text"));

    keys.forEach((textKey, index) => {
        const valueKey = textKey.replace("_text", "_value");

        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-3");

        const statusBoxDiv = document.createElement("div");
        statusBoxDiv.classList.add("status-box");

        if (textKey === "overdue_text") {
            statusBoxDiv.classList.add("active");
        }

        statusBoxDiv.innerHTML = `
        <div class="title">${overviewData[textKey]}</div>
        <div class="number">${overviewData[valueKey]}</div>`;

        colDiv.appendChild(statusBoxDiv);
        overviewContainer.appendChild(colDiv);
    })
}

getOverviewData();


// 2/ Populate data for Trends section: 
async function getTrendsData() {
    const fetchData = await fetch("../data/data.json")
    const result = await fetchData.json();

    const trendsData = result.Trends;
    const trendsContainer = document.getElementById('TrendsCard');

    const TrendsKeys = Object.keys(trendsData).filter(key => key.endsWith("_text"));

    TrendsKeys.forEach((textKey) => {
        const valueKey = textKey.replace("_text", "_value");

        const summaryItemDiv = document.createElement("div");
        summaryItemDiv.classList.add("summary-item");

        const trendsLabel = document.createElement("label");
        trendsLabel.classList.add("title");
        trendsLabel.textContent = trendsData[textKey];

        const trendsNum = document.createElement("text");
        trendsNum.classList.add("number");
        trendsNum.textContent = trendsData[valueKey];

        summaryItemDiv.appendChild(trendsLabel);
        summaryItemDiv.appendChild(trendsNum);
        trendsContainer.appendChild(summaryItemDiv);
    })
}

getTrendsData();


// 3/ Populate data for Tickets section: 
async function getTicketsData() {
    const fetchData = await fetch("../data/data.json")
    const result = await fetchData.json();

    const ticketsData = result.UnresolvedTickets;
    const ticketsContainer = document.getElementById('TicketsCard');

    const TicketsKeys = Object.keys(ticketsData).filter(key => key.endsWith("_text"));

    TicketsKeys.forEach((textKey) => {
        const valueKey = textKey.replace("_text", "_value");

        const ticketsItemDiv = document.createElement("div");
        ticketsItemDiv.classList.add(
            "custom-card-info-item",
            "w-100",
            "py-3",
            "d-flex",
            "flex-row",
            "justify-content-between"
        );

        const ticketsText = document.createElement("div");
        ticketsText.textContent = ticketsData[textKey];

        const ticketsNum = document.createElement("div");
        ticketsNum.classList.add("muted-text");
        ticketsNum.textContent = ticketsData[valueKey]

        ticketsItemDiv.appendChild(ticketsText);
        ticketsItemDiv.appendChild(ticketsNum);
        ticketsContainer.appendChild(ticketsItemDiv);
    })
}

getTicketsData();


// 4/ Populate data for NavBar: 
async function getNavData() {
    const fetchData = await fetch("../data/data.json")
    const result = await fetchData.json();

    const NavData = result.NavBar;
    const NavContainer = document.getElementById('mainNav');

    const NavItems = NavContainer.querySelectorAll(".nav-item");

    Object.keys(NavData).forEach((key, index) => {
        const NavText = NavData[key];
        const navLinkText = NavItems[index].querySelector(".nav-text");
        navLinkText.textContent = NavText;
    })
}

getNavData();

