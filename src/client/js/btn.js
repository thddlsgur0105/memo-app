// BTN CLASS
export class Btn {
    constructor(container) {
        this.node = container;
        console.log(container);
        this.StyleBtn();
        this.addEventListener();
    }
    
    addEventListener = () => {
        this.node.addEventListener("mousedown", this.handleBtnDown);
        this.node.addEventListener("mouseup", this.handleBtnUp);
    }

    StyleBtn = () => {
        if (text) {
            this.node.innerHTML = text;
        }
        this.node.style.cssText = `
            background-color: ${color};
            border-radius: ${radius};
            box-shadow: 2px 2px 2px 0px #34495e;
            font-size: 10px;
            font-weight: 600;
            color: #2c3e50;
        `
        this.main.appendChild(this.node);
    }

    handleBtnDown = (event) => {
        // Btn Click Down Movement
        const btn = event.target;
        this.btnDownAni(btn);
    }
    handleBtnUp = (event) => {
        // Btn Click Up Movement
        const btn = event.target;
        this.btnUpAni(btn);
    }
    btnDownAni = (btn) => {
        if (btn.classList.contains("up-btn")) {
            btn.classList.replace("up-btn", "down-btn");
        } else {
            btn.classList.add("down-btn");
        }
    }
    btnUpAni = (btn) => {
        if (btn.classList.contains("down-btn")) {
            btn.classList.replace("down-btn", "up-btn");
        }
    }
}