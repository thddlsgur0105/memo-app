// Class

import { Btn } from "./btn";

export class Status {
    constructor() {
        this.jsSideBarStatus = document.querySelector("#jsSideBarStatus");
        this.jsSideBarStatusContainer = this.jsSideBarStatus ? this.jsSideBarStatus.querySelector("#jsSideBarStatusContainer") : null;
        this.jsSideBarStatusBar = this.jsSideBarStatusContainer ? this.jsSideBarStatusContainer.querySelector("#jsSideBarStatusBar") : null;

        if (this.jsSideBarStatus) {
            this.initStatus();

            // Btn Styling
            new Btn(this.jsSideBarStatusContainer)

            // BtnActive Styling
        }
    }

    // functions
    initStatus = () => {
        // initial count
        this.statusCount();
    }

    statusCount = () => {
        const currentStorage = sessionStorage.getItem("toDos");
        const parsedStorage = JSON.parse(currentStorage)
        const statusList = parsedStorage ? parsedStorage.map(item => item.completed) : [];
    
        let trueCount = 0; 
        let falseCount = 0;
    
        statusList.forEach(item => {
            if (item === true) {
                trueCount = trueCount + 1;
            } else {
                falseCount = falseCount + 1;
            }
        });
    
        this.jsSideBarStatusBar.addEventListener("transitionstart", () => {
            this.jsSideBarStatusContainer.classList.add("status-focus");
        })
    
        this.jsSideBarStatusBar.addEventListener("transitionend", () => {
            this.jsSideBarStatusContainer.classList.remove("status-focus");
        })
    
        // statusBar update
        const widthFraction =  trueCount / (trueCount + falseCount);
        this.jsSideBarStatusBar.style.width = `${widthFraction * 100}%`;
    }
}

new Status();