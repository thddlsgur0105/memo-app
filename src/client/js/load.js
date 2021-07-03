import {Btn, BtnActive} from "./btn"

class Load {
    constructor() {
        this.jsLoadContainer = document.querySelector("#jsLoadContainer");
        this.jsLoadCard = this.jsLoadContainer ? (this.jsLoadContainer.querySelector("#jsLoadCard")) : null;
        this.jsLoadInputBox = this.jsLoadCard ? (this.jsLoadCard.querySelector("#jsLoadInputBox")) : null;
        this.jsLoadInput = this.jsLoadInputBox ? (this.jsLoadInputBox.querySelectorAll("input")) : null;
        this.jsLoadInputBtn = this.jsLoadInputBox ? (this.jsLoadInputBox.querySelector("#jsLoadInputBtn")) : null;
        this.jsLoadResult = this.jsLoadCard ? (this.jsLoadCard.querySelector("#jsLoadResult")) : null;
        this.flagArray;

        if (this.jsLoadContainer) {
            this.LoadInit();

            // Styling
            new Btn(this.jsLoadCard);
            this.jsLoadInput.forEach(input => {
                new Btn(input);
            })
        }
    }

    // Functions
    LoadInit = () => {
        // localStorage에 있는 저장된 데이터 로딩
        const loadedArray = localStorage.getItem("links");
        const parsedArray = JSON.parse(loadedArray);
        if (parsedArray) {
            this.flagArray = [];
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
    
        // anchor
        const linkAnchor = document.createElement("a");
        linkAnchor.classList.add("welcome__link")
        linkAnchor.href = link;
        linkAnchor.id = id;
    
        // icon
        const linkIcon = document.createElement("i");
        linkIcon.classList.add("fab", `fa-${name}`, "fa-lg");
        
        // span
        const linkSpan = document.createElement("span");
        linkSpan.innerHTML = name;
        linkSpan.style.display = "none";
    
        linkAnchor.appendChild(linkIcon);
        linkAnchor.appendChild(linkSpan);
    
        // delete Btn
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "link__btn", "hide");
        deleteBtn.addEventListener("click", this.handleDeleteBtnClick);
        
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash");
        deleteBtn.appendChild(deleteIcon);
        
        linkContainer.appendChild(linkAnchor);
        linkContainer.appendChild(deleteBtn);
    
        linkContainer.addEventListener("mouseenter", this.handleContainerHover);
        linkContainer.addEventListener("mouseleave", this.handleContainerLeave);

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
        const targetId = targetContainer.querySelector("a").id;
        
        // frontend process
        this.jsLoadResult.removeChild(targetContainer);
    
        // backend process
        this.flagArray = this.flagArray.filter(one => one.id !== parseInt(targetId));
        this.saveLink(this.flagArray);
    }

    handleContainerHover = (event) => {
        const targetContainer = event.target;
        const targetBtn = targetContainer.querySelector(".link__btn");
        if (targetContainer.classList.contains("leaved")) {
            targetContainer.classList.replace("leaved", "hovered");
            targetBtn.classList.replace("hide-btn", "show-btn");
        } else {
            targetContainer.classList.add("hovered");
            targetBtn.classList.replace("hide", "show-btn");
        }
    }

    handleContainerLeave = (event) => {
        const targetContainer = event.target;
        const targetBtn = targetContainer.querySelector(".link__btn");
        targetContainer.classList.replace("hovered", "leaved");
        targetBtn.classList.replace("show-btn", "hide-btn");
    }
}

new Load();

