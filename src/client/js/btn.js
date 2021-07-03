// BTN CLASS
export class Btn {
    constructor({main, container, color, radius}) {
        this.main = main;
        this.node = container;
        this.StyleBtn({color, radius});
        this.addEventListener();
    }
    
    addEventListener = () => {
        this.node.addEventListener("mousedown", this.handleBtnDown);
        this.node.addEventListener("mouseup", this.handleBtnUp);
    }

    StyleBtn = ({color, radius}) => {
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