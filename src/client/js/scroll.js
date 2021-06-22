const jsSideBarContainer = document.querySelector("#jsSideBarContainer");
const jsSideBarToDo = jsSideBarContainer ? jsSideBarContainer.querySelector("#jsSideBarToDo") : null;

const jsSideBarCompleted = jsSideBarContainer ? jsSideBarContainer.querySelector("#jsSideBarCompleted") : null;
const jsSideBarCompletedBtn = jsSideBarCompleted ? jsSideBarCompleted.querySelector("#jsSideBarCompletedBtn") : null;

function handleSideBarCompleted(event) {
    let targetNode = event.target;
    if (targetNode.tagName === "SPAN") {
        targetNode = targetNode.parentNode;
    }
    targetNode.classList.add("hide")
}

function initSideBar() {
    jsSideBarCompletedBtn.addEventListener("click", handleSideBarCompleted);
}

if (jsSideBarContainer) {
    initSideBar();
}