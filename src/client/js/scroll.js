// Class

class Scroll {
    constructor() {
        this.jsSideBarContainer = document.querySelector("#jsSideBarContainer");
        this.jsSideBarToDo = this.jsSideBarContainer ? this.jsSideBarContainer.querySelector("#jsSideBarToDo") : null;
        this.jsSideBarToDoBtn = this.jsSideBarToDo ? this.jsSideBarToDo.querySelector("#jsSideBarToDoBtn") : null;

        this.jsSideBarCompleted = this.jsSideBarContainer ? this.jsSideBarContainer.querySelector("#jsSideBarCompleted") : null;
        this.jsSideBarCompletedBtn = this.jsSideBarCompleted ? this.jsSideBarCompleted.querySelector("#jsSideBarCompletedBtn") : null;

        this.jsMemoContainer = document.querySelector("#jsMemoContainer");
        this.jsMemoContainerToDo = this.jsMemoContainer ? this.jsMemoContainer.querySelector("#jsMemoContainerToDo") : null;
        this.jsMemoContainerCompleted = this.jsMemoContainer ? this.jsMemoContainer.querySelector("#jsMemoContainerCompleted") : null;

        if (this.jsSideBarContainer && this.jsMemoContainer) {
            this.initSideBar();
        }
    }

    initSideBar = () => {
        this.jsSideBarToDoBtn.addEventListener("click", this.handleSideBarToDoBtn);
        this.jsSideBarCompletedBtn.addEventListener("click", this.handleSideBarCompleted);
    }

    handleSideBarToDoBtn = (event) => {
        let targetNode = event.target;
        if (targetNode.tagName === "SPAN") {
            targetNode = targetNode.parentNode;
        }
        
        // 할 일 클릭 버튼 숨김
        targetNode.classList.replace("show", "hide-bar");
        targetNode.disabled = true;
    
        // 한 일 클릭 버튼 보여주기
        this.jsSideBarCompletedBtn.classList.replace("hide-bar", "show");
        this.jsSideBarCompletedBtn.disabled = false;
    
        // 화면 grid 0% ~ 50% 상태 보여주기
        this.jsMemoContainerToDo.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
        });
    }

    handleSideBarCompleted = (event) => {
        let targetNode = event.target;
        if (targetNode.tagName === "SPAN") {
            targetNode = targetNode.parentNode;
        }
    
        if (!targetNode.classList.contains("show")) {
            // 한 일 클릭 버튼 숨김 
            targetNode.classList.add("hide-bar");
            targetNode.disabled = true;
    
            // 할 일 클릭 버튼 보여주기
            this.jsSideBarToDoBtn.classList.replace("init-hide-bar", "show");
            this.jsSideBarToDoBtn.disabled = false;
        } else {
            // 한 일 클릭 버튼 숨김
            targetNode.classList.replace("show", "hide-bar");
            targetNode.disabled = true;
    
            // 할 일 클릭 버튼 보여주기
            this.jsSideBarToDoBtn.classList.replace("hide-bar", "show");
            this.jsSideBarToDoBtn.disabled = false;
        }
    
        // 화면 grid 50% ~ 100% 상태 보여주기
        this.jsMemoContainerCompleted.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "end",
        });
    }
}

new Scroll();