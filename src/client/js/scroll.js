const jsSideBarContainer = document.querySelector("#jsSideBarContainer");
const jsSideBarToDo = jsSideBarContainer ? jsSideBarContainer.querySelector("#jsSideBarToDo") : null;
const jsSideBarToDoBtn = jsSideBarToDo ? jsSideBarToDo.querySelector("#jsSideBarToDoBtn") : null;

const jsSideBarCompleted = jsSideBarContainer ? jsSideBarContainer.querySelector("#jsSideBarCompleted") : null;
const jsSideBarCompletedBtn = jsSideBarCompleted ? jsSideBarCompleted.querySelector("#jsSideBarCompletedBtn") : null;

const jsMemoContainer = document.querySelector("#jsMemoContainer");
const jsMemoContainerToDo = jsMemoContainer ? jsMemoContainer.querySelector("#jsMemoContainerToDo") : null;
const jsMemoContainerCompleted = jsMemoContainer ? jsMemoContainer.querySelector("#jsMemoContainerCompleted") : null;

function handleSideBarToDoBtn(event) {
    let targetNode = event.target;
    if (targetNode.tagName === "SPAN") {
        targetNode = targetNode.parentNode;
    }
    
    // 할 일 클릭 버튼 숨김
    targetNode.classList.replace("show", "hide-bar");
    targetNode.disabled = true;

    // 한 일 클릭 버튼 보여주기
    jsSideBarCompletedBtn.classList.replace("hide-bar", "show");
    jsSideBarCompletedBtn.disabled = false;

    // 화면 grid 0% ~ 50% 상태 보여주기
    jsMemoContainerToDo.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
    });
}

function handleSideBarCompleted(event) {
    let targetNode = event.target;
    if (targetNode.tagName === "SPAN") {
        targetNode = targetNode.parentNode;
    }

    if (!targetNode.classList.contains("show")) {
        // 한 일 클릭 버튼 숨김 
        targetNode.classList.add("hide-bar");
        targetNode.disabled = true;

        // 할 일 클릭 버튼 보여주기
        jsSideBarToDoBtn.classList.replace("init-hide-bar", "show");
        jsSideBarToDoBtn.disabled = false;
    } else {
        // 한 일 클릭 버튼 숨김
        targetNode.classList.replace("show", "hide-bar");
        targetNode.disabled = true;

        // 할 일 클릭 버튼 보여주기
        jsSideBarToDoBtn.classList.replace("hide-bar", "show");
        jsSideBarToDoBtn.disabled = false;
    }

    // 화면 grid 50% ~ 100% 상태 보여주기
    jsMemoContainerCompleted.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
    });
}

function initSideBar() {
    jsSideBarToDoBtn.addEventListener("click", handleSideBarToDoBtn);
    jsSideBarCompletedBtn.addEventListener("click", handleSideBarCompleted);
}

if (jsSideBarContainer && jsMemoContainer) {
    initSideBar();
}