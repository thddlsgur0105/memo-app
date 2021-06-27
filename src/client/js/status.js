const jsSideBarStatus = document.querySelector("#jsSideBarStatus");
const jsSideBarStatusContainer = jsSideBarStatus ? jsSideBarStatus.querySelector("#jsSideBarStatusContainer") : null;
const jsSideBarStatusBar = jsSideBarStatusContainer ? jsSideBarStatusContainer.querySelector("#jsSideBarStatusBar") : null;


export function statusCount() {
    const currentStorage = sessionStorage.getItem("toDos");
    const parsedStorage = JSON.parse(currentStorage)
    const statusList = parsedStorage.map(item => item.completed);

    let trueCount = 0; 
    let falseCount = 0;

    statusList.forEach(item => {
        if (item === true) {
            trueCount = trueCount + 1;
        } else {
            falseCount = falseCount + 1;
        }
    });

    jsSideBarStatusBar.addEventListener("transitionstart", () => {
        jsSideBarStatusContainer.classList.add("status-focus");
    })

    jsSideBarStatusBar.addEventListener("transitionend", () => {
        jsSideBarStatusContainer.classList.remove("status-focus");
    })

    // statusBar update
    const widthFraction =  trueCount / (trueCount + falseCount);
    jsSideBarStatusBar.style.width = `${widthFraction * 100}%`;
}

function initStatus() {
    
    // initial count
    statusCount();

}

if (jsSideBarStatus) {
    initStatus();
}