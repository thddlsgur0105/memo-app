// Class

class Nav {
    constructor() {
        this.jsNavBtn = document.querySelector("#jsNavBtn");
        this.jsNavIcon = this.jsNavBtn ? (this.jsNavBtn.querySelector("i")) : null;
        this.jsNavUl = document.querySelector("#jsNavUl");
        
        if (this.jsNavBtn && this.jsNavUl) {
            this.initNav();
        }
    }

    // functions

    initNav = () => {
        this.jsNavBtn.addEventListener("click", this.handleNavBtn);
    }

    handleNavBtn = (event) => {
        event.preventDefault();
        this.jsNavBtn.classList.toggle("btn-clicked");
        if (this.jsNavBtn.classList.contains("btn-clicked")) {
            if (this.jsNavUl.classList.contains("init-hide")) {
                this.jsNavUl.classList.replace("init-hide", "show-slider")
            } else {
                this.jsNavUl.classList.replace("hide-slider", "show-slider")
            }
        } else {
            this.jsNavUl.classList.replace("show-slider", "hide-slider")
        }
    }
}

new Nav()