import { Btn, BtnActive } from "./btn";

class Form {
    constructor() {
        this.jsFormContainer = document.querySelector("#jsFormContainer");
        this.jsFormBtn = this.jsFormContainer ? this.jsFormContainer.querySelector("#jsFormBtn") : null;
        this.jsFormInput = this.jsFormContainer ? this.jsFormContainer.querySelectorAll(".form__input") : null;

        if (this.jsFormContainer) {
            // Btn Styling
            new Btn(this.jsFormContainer);
            this.jsFormInput.forEach(input => {
                new Btn(input)
            })

            // BtnActive Styling
            new BtnActive(this.jsFormBtn);
        }
    }
} 

new Form();