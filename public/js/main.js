// Populate data for Overview section: 
async function getOverviewData() {
    const fetchData = await fetch("../data/data.json")
    const result = await fetchData.json();

    const overviewData = result.Overview;
    const overviewContainer = document.getElementById('OverviewStatus');

    const keys = Object.keys(overviewData).filter(key => key.endsWith("_text"));

    keys.forEach ((textKey, index) => {
        const valueKey = textKey.replace("_text", "_value");

        const colDiv = document.createElement("div"); 
        colDiv.classList.add("col-md-3"); 

        const statusBoxDiv = document.createElement("div");
        statusBoxDiv.classList.add("status-box"); 
        
        if (textKey === "overdue_text") {
            statusBoxDiv.classList.add("active");}

        statusBoxDiv.innerHTML = `
        <div class="title">${overviewData[textKey]}</div>
        <div class="number">${overviewData[valueKey]}</div>`;

        colDiv.appendChild(statusBoxDiv); 
        overviewContainer.appendChild(colDiv);
})}

getOverviewData();


// Populate data for Trends section: 
async function getTrendsData() {
    const fetchData = await fetch("../data/data.json")
    const result = await fetchData.json();

    const trendsData = result.Trends;
    const trendsContainer = document.getElementById('TrendsCard');

    const TrendsKeys = Object.keys(trendsData).filter(key => key.endsWith("_text"));

    TrendsKeys.forEach ((textKey) => {
        const valueKey = textKey.replace("_text", "_value");

        const summaryItemDiv = document.createElement("div"); 
        summaryItemDiv.classList.add("summary-item"); 

        const trendsLabel = document.createElement("label");
        trendsLabel.classList.add("title"); 
        trendsLabel.textContent = trendsData[textKey]

        const trendsNum = document.createElement("text");
        trendsNum.classList.add("number"); 
        trendsNum.textContent = trendsData[valueKey]

        summaryItemDiv.appendChild(trendsLabel);
        summaryItemDiv.appendChild(trendsNum); 
        trendsContainer.appendChild(summaryItemDiv);
})}

getTrendsData();



//     // nav bar part:
//     const navBarData = result.NavBar; 
//     const navHolder = document.getElementById("mainNav");
//     const navLinks = navHolder.querySelectorAll(".nav-item"); 
    
//    const navValues = Object.values(navBarData); 

//    navLinks.forEach((listItem, index) => {
//     const span = listItem.querySelector(".nav-link-text");
//     if (span && navValues[index]) {
//         span.textContent = navValues[index];
//     } 
//    });



    // const statusItems = [
    //     {textKey: "unresolved_text", valueKey: "unresolved_value"}, 
    //     {textKey: "overdue_text", valueKey: "overdue_value", Active: true}, 
    //     {textKey: "open_text", valueKey: "open_value"}, 
    //     {textKey: "onHold_text", valueKey: "onHold_value"}, 
    // ];

    // statusItems.forEach(item => {
    //     const colDiv = document.createElement("div"); 
    //     colDiv.classList.add("col-md-3"); 

    //     const statusBoxDiv = document.createElement("div");
    //     statusBoxDiv.classList.add("status-box"); 
    //     if (item.Active) {
    //         statusBoxDiv.classList.add("active");
    //     }

    //     const titleDiv = document.createElement("div"); 
    //     titleDiv.classList.add("title");
    //     titleDiv.textContent = overviewData[item.textKey];

    //     const numberDiv = document.createElement("div"); 
    //     numberDiv.classList.add("number");
    //     numberDiv.textContent = overviewData[item.valueKey];

    //     statusBoxDiv.appendChild(titleDiv);
    //     statusBoxDiv.appendChild(numberDiv);
    //     colDiv.appendChild(statusBoxDiv);
    //     overviewContainer.appendChild(colDiv);
    // })