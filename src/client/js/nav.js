import { Btn, BtnActive } from "./btn"

// Class

class Nav {
    constructor() {
        this.jsNavHeader = document.querySelector("#jsNavHeader");
        this.jsNavContainer = document.querySelector("#jsNavContainer");
        this.jsNavMemo = this.jsNavContainer.querySelector("#jsNavMemo");
        this.jsNavLoad = this.jsNavContainer.querySelector("#jsNavLoad");

        this.jsMainContainer = document.querySelector("#jsMainContainer");
        this.jsHeaderContainer = this.jsNavHeader.querySelector("#jsHeaderContainer");

        // Btn & BtnActive Styling
        new Btn(this.jsNavHeader);
        new BtnActive(this.jsNavMemo);
        new BtnActive(this.jsNavLoad);

        // Functions
        if (this.jsNavContainer && this.jsMainContainer && this.jsHeaderContainer) {
            this.navInit();
        }
    }

    navInit = () => {
        // Btn 클릭 시 Slider 설정 필요
        this.jsNavMemo.addEventListener("click", this.handleNavMemoClick);
        this.jsNavLoad.addEventListener("click", this.handleNavLoadClick);
    }

    handleNavMemoClick = () => {
        this.jsMainContainer.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        })

        this.jsHeaderContainer.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        })
        
    }

    handleNavLoadClick = () => {
        this.jsMainContainer.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "start",
        })

        this.jsHeaderContainer.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        })
    }

}

new Nav();