import { Btn, BtnActive } from "./btn"

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

            // Btn Styling

            // BtnActive Styling
            new BtnActive(this.jsSideBarToDoBtn);
            new BtnActive(this.jsSideBarCompletedBtn);
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
        targetNode.classList.remove("show")
        targetNode.classList.replace("up-btn", "hide-bar");
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

    // Btn 숨김과 관련된 Animation 처리
    // Btn Up Animation 완료된 이후에 Btn 숨김 효과 발생 지정
    handleSideBarCompleted = (event) => {
        let targetNode = event.target;
        if (targetNode.tagName === "SPAN") {
            targetNode = targetNode.parentNode;
        }
    
        if (!targetNode.classList.contains("show")) {
            // 한 일 클릭 버튼 숨김 
            targetNode.classList.replace("up-btn", "hide-bar");
            targetNode.disabled = true;
    
            // 할 일 클릭 버튼 보여주기
            this.jsSideBarToDoBtn.classList.replace("init-hide-bar", "show");
            this.jsSideBarToDoBtn.disabled = false;
        } else {
            // 한 일 클릭 버튼 숨김
            targetNode.classList.remove("show")
            targetNode.classList.replace("up-btn", "hide-bar");
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