import {Btn, BtnActive} from "./btn"

class Load {
    constructor() {
        this.jsLoadContainer = document.querySelector("#jsLoadContainer");
        this.jsLoadCard = this.jsLoadContainer ? (this.jsLoadContainer.querySelector("#jsLoadCard")) : null;
        this.jsLoadInputBox = this.jsLoadCard ? (this.jsLoadCard.querySelector("#jsLoadInputBox")) : null;
        this.jsLoadInput = this.jsLoadInputBox ? (this.jsLoadInputBox.querySelectorAll("input")) : null;
        this.jsLoadInputBtn = this.jsLoadInputBox ? (this.jsLoadInputBox.querySelector("#jsLoadInputBtn")) : null;
        this.jsLoadResult = this.jsLoadCard ? (this.jsLoadCard.querySelector("#jsLoadResult")) : null;
        this.flagArray = [];

        if (this.jsLoadContainer) {
            this.LoadInit();

            // Btn Styling
            new Btn(this.jsLoadCard);
            this.jsLoadInput.forEach(input => {
                new Btn(input);
            });

            // BtnActive Styling
            new BtnActive(this.jsLoadInputBtn);
        }
    }

    // Functions
    LoadInit = () => {
        // localStorage에 있는 저장된 데이터 로딩
        const loadedArray = localStorage.getItem("links");
        const parsedArray = JSON.parse(loadedArray);
        if (parsedArray) {
            parsedArray.forEach((parsedOne) => {
                const newObj = {
                    name: parsedOne.name,
                    link: parsedOne.link,
                    id: this.flagArray.length + 1,
                };
    
                // frontend process
                this.paintLink(newObj);
                this.flagArray.push(newObj);
            });
    
            // backend process
            this.saveLink(this.flagArray)
        }
        
        // btn에 이벤트 리스너 설정
        this.jsLoadInputBtn.addEventListener("click", this.handleInputBtnClick);
    }

    paintLink = (obj) => {
        const [name, link, id]  = [obj.name, obj.link, obj.id];
    
        // container
        const linkContainer = document.createElement("div");
        linkContainer.className = "welcome__container";
        linkContainer.id = id;
    
        // icon
        const linkIcon = document.createElement("i");
        linkIcon.classList.add("fab", `fa-${name}`, "fa-lg");
        
        // span
        const linkSpan = document.createElement("span");
        linkSpan.innerHTML = name;
        linkSpan.style.display = "none";
    
        linkContainer.appendChild(linkIcon);
        linkContainer.appendChild(linkSpan);
        new BtnActive(linkContainer);
    
        // delete Btn
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "link__btn", "hide");
        deleteBtn.id = "delBtn";
        deleteBtn.addEventListener("mousedown", this.handleDeleteBtnClick);
        
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash");
        deleteBtn.appendChild(deleteIcon);
        new BtnActive(deleteBtn);

        // anchor Btn
        const goBtn = document.createElement("a");
        goBtn.classList.add("btn", "link__btn", "hide");
        goBtn.id = "goBtn";
        goBtn.addEventListener("mousedown", () => {
            goBtn.classList.add("fixed");
            return location.href = link;
        });

        const goIcon = document.createElement("i");
        goIcon.classList.add("fas", "fa-external-link-alt");
        goBtn.appendChild(goIcon)
        new BtnActive(goBtn)

        
        linkContainer.appendChild(deleteBtn);
        linkContainer.appendChild(goBtn);
    
        linkContainer.addEventListener("click", this.handleContainerClick)

        this.jsLoadResult.appendChild(linkContainer);
    }

    saveLink = (array) => {
        localStorage.setItem("links", JSON.stringify(array))
    }

    handleInputBtnClick = (event) => {
        event.preventDefault();
        const [name, link] = [this.jsLoadInput[0].value, this.jsLoadInput[1].value];
        const newObj = {
            name,
            link,
            id: this.flagArray.length + 1,
        };
    
        [this.jsLoadInput[0].value, this.jsLoadInput[1].value] = ["",""];
    
        // frontend process
        this.paintLink(newObj);
        this.flagArray.push(newObj);
    
        // backend process
        this.saveLink(this.flagArray);
    }
    
    handleDeleteBtnClick = (event) => {
        let targetNode = event.target;
        if (targetNode.tagName === "I") {
            targetNode = targetNode.parentNode;
        } 
        const targetContainer = targetNode.parentNode;
        const targetId = targetContainer.id;
        
        // frontend process
        this.jsLoadResult.removeChild(targetContainer);
    
        // backend process
        this.flagArray = this.flagArray.filter(one => one.id !== parseInt(targetId));
        this.saveLink(this.flagArray);
    }

    handleContainerClick = (event) => {
        let targetNode = event.target;
        if (targetNode.tagName === "I") {
            targetNode = targetNode.parentNode;
        }
        const targetDelBtn = targetNode.querySelector("#delBtn");
        const targetGoBtn = targetNode.querySelector("#goBtn");
        
        targetNode.classList.toggle("click");
        if (targetNode.classList.contains("click")) {
            // Show delBtn
            // 오류 발생 부분 -> 아마 부모요소 안에 optionBtns를 추가해 클릭 이벤트 중복 때문인 듯
            targetDelBtn.classList.replace("hide", "show-btn");
            
            // Show goBtn
            targetGoBtn.classList.replace("hide", "show-go-btn");
        } else {
            // Hide delbtn
            targetDelBtn.classList.replace("show-btn", "hide-btn");
            targetDelBtn.addEventListener("animationend", this.targetDelBtnHide);

            // Hide goBtn
            targetGoBtn.classList.replace("show-go-btn", "hide-go-btn");
            targetGoBtn.addEventListener("animationend", this.targetGoBtnHide);
            }
    }

    targetDelBtnHide = (event) => {
        const targetNode = event.target;
        targetNode.classList.replace("hide-btn", "hide");
    }

    targetGoBtnHide = (event) => {
        const targetNode = event.target;
        targetNode.classList.replace("hide-go-btn", "hide");
    }
}

new Load();

