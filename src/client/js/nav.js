import { Btn, BtnActive } from "./btn"

// Class

class Nav {
    constructor() {
        this.jsNavHeader = document.querySelector("#jsNavHeader");
        this.jsNavContainer = document.querySelector("#jsNavContainer");
        this.jsNavMemo = this.jsNavContainer.querySelector("#jsNavMemo");
        this.jsNavLoad = this.jsNavContainer.querySelector("#jsNavLoad");
        
        // Btn & BtnActive Styling
        new Btn(this.jsNavHeader);
        new BtnActive(this.jsNavMemo);
        new BtnActive(this.jsNavLoad);

        // Functions
        if (this.jsNavContainer) {
            this.navInit();
        }
    }

    navInit = () => {
        // Btn 클릭 시 Slider 설정 필요
    }
}

new Nav();