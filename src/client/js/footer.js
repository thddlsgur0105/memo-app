import { Btn } from "./btn"

// Class 생성

class Footer {
    constructor() {
        this.jsFooterContainer = document.querySelector("#jsFooter");
        this.jsFooterContent = this.jsFooterContainer ? this.jsFooterContainer.querySelector("#jsFooterContent") : null;

        if (this.jsFooterContainer && this.jsFooterContent) {
            // Btn Styling
            new Btn(this.jsFooterContent);
        }
    }
    
}

new Footer();
