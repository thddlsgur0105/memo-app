// BTN CLASS

// 1. Btn(추가 장소, 추가 내용)
// 2. 기본적인 버튼 모양 Btn
// 3. 버튼 관련된 Styling
// 4. extends 버튼 모양 BtnActive
// 5. 버튼 클릭 관련 Animation Styling

export class Btn {
    constructor(content) {
        this.content = content;
        this.StyleBtn();
    }
    StyleBtn = () => {
        this.content.style.cssText = `
            box-shadow: inset 0.5px 0.5px 5px 1px #34495e;
            font-size: auto;
            font-weight: 600;
        `
    }
}

// 추가적인 수정 필요 - eventListener 부분
export class BtnActive extends Btn {
    constructor(content) {
        super(content);
        // removeEventListenerHover
        this.addEventListenerClick();
    }
    addEventListenerClick = () => {
        this.content.addEventListener("mousedown", this.handleBtnDown);
        this.content.addEventListener("mouseup", this.handleBtnUp);
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