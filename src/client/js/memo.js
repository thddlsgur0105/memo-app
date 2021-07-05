import { Status } from "./status"

// Class

class Memo {
    constructor() {
        this.jsMemoHeader = document.querySelector("#jsMemoHeader");
        this.jsMemoBtn = this.jsMemoHeader ? (this.jsMemoHeader.querySelector("#jsMemoBtn")) : null;
        this.jsMemoIcon = this.jsMemoBtn ? (this.jsMemoBtn.querySelector("#jsMemoIcon")) : null;
        this.jsMemoInputBox = this.jsMemoHeader ? (this.jsMemoHeader.querySelector("#jsMemoInputBox")) : null;
        this.jsMemoInput = this.jsMemoInputBox ? (this.jsMemoInputBox.querySelectorAll("input")) : null;

        this.jsMemoMain = document.querySelector("#jsMemoMain"); 
        this.jsNewMemoSection = this.jsMemoMain ? (this.jsMemoMain.querySelector(".memo-section")) : null;

        this.jsMemoMainCompleted = document.querySelector("#jsMemoMainCompleted");
        this.jsNewMemoSectionCompleted = this.jsMemoMainCompleted ? (this.jsMemoMainCompleted.querySelector(".memo-section")) : null;


        this.memoArray = [];

        // Name
        this.TODOS = "toDos";
        this.TODO_FLAG = "toDo";
        this.COMPLETED_FLAG = "completed";

        if (this.jsMemoHeader && this.jsMemoMain) {
            this.initMemo();
        }
    }

    // functions
    initMemo = () => {

        // 기존의 sessionStorage 할 일들 내용 로드
        const loadedArray = sessionStorage.getItem(this.TODOS);
        let parsedArray;
    
        if (!loadedArray) {
            parsedArray = null;
        } else {
            parsedArray = JSON.parse(loadedArray);
        }
        
        if (parsedArray) {
            parsedArray.forEach(oneMemo => {
    
                const initedMemo = {
                    title: oneMemo.title,
                    description: oneMemo.description,
                    id: this.memoArray.length + 1,
                    completed: oneMemo.completed,
                }
    
                // frontend Process
                if (initedMemo.completed === false) {
                    this.paintMemo(initedMemo, this.TODO_FLAG);
                } else {
                    this.paintMemo(initedMemo, this.COMPLETED_FLAG);
                }
    
                // backend Procass
                this.memoArray.push(initedMemo);
                this.saveMemo(this.memoArray);
            });
        
        }
    
        // memo click Btn 활성화
        
        this.jsMemoBtn.addEventListener("click", this.handleAddBtnClick);
    }

    paintMemo = (obj, targetList) => {

        // .memo box
        const divBox = document.createElement("div");
        divBox.className = "memo";
        divBox.id = obj.id;
    
        // .memo__title box
        const titleBox = document.createElement("h2");
        titleBox.className = "memo__title";
        titleBox.innerHTML = obj.title;
    
        // .memo__description box
        const descriptionBox = document.createElement("h5");
        descriptionBox.className = "memo__description";
        descriptionBox.innerHTML = obj.description;
    
        // option button
        const optionBtn = document.createElement("button");
        optionBtn.classList.add("btn", "memo__option");
        const optionIcon = document.createElement("i");
        optionIcon.classList.add("fas", "fa-chevron-right", "fa-lg");
        optionBtn.appendChild(optionIcon);
        optionBtn.addEventListener("click", this.handleOptionBtnClick);
    
        // delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "memo__delete", "hide");
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash", "fa-lg");
        deleteBtn.appendChild(deleteIcon);
        deleteBtn.addEventListener("click", this.handleDeleteBtnClick);
    
        // edit button
        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "memo__edit", "hide");
        const editIcon = document.createElement("i");
        editIcon.classList.add("fas", "fa-pen", "fa-lg");
        editBtn.appendChild(editIcon);
        editBtn.addEventListener("click", this.handleEditBtnClick);
    
        divBox.appendChild(titleBox);
        divBox.appendChild(descriptionBox);
        divBox.appendChild(optionBtn);
        divBox.appendChild(deleteBtn);
        divBox.appendChild(editBtn);
    
        if (targetList === this.TODO_FLAG) {
            // go to complete button
            const completeBtn = document.createElement("button");
            completeBtn.classList.add("btn", "memo__complete", "hide");
            const completeIcon = document.createElement("i");
            completeIcon.classList.add("fas", "fa-check", "fa-lg");
            completeBtn.appendChild(completeIcon);
            completeBtn.addEventListener("click", this.handleCompleteBtnClick);
    
            // adding completeBtn
            divBox.appendChild(completeBtn);
    
            // adding to toDoSection
            this.jsNewMemoSection.appendChild(divBox);
        }
    
        if (targetList === this.COMPLETED_FLAG) {
            // go to toDoBtn
            const toDoBtn = document.createElement("button");
            toDoBtn.classList.add("btn", "memo__toDo", "hide");
            const toDoIcon = document.createElement("i");
            toDoIcon.classList.add("fas", "fa-reply", "fa-lg");
            toDoBtn.appendChild(toDoIcon);
            toDoBtn.addEventListener("click", this.handleToDoBtnClick);
    
            // adding toDoBtn
            divBox.appendChild(toDoBtn);
    
            // adding to completedSection
            this.jsNewMemoSectionCompleted.appendChild(divBox);
        }
    }

    saveMemo = (array) => {
        sessionStorage.setItem(this.TODOS, JSON.stringify(array));
    }

    handleDeleteBtnClick = (event) => {
        event.preventDefault();
        let targetNode = event.target;
        if (targetNode.tagName === "I") {
            targetNode = targetNode.parentNode;
        }
    
        const targetMemo = targetNode.parentNode
        const targetId = targetMemo.id;
    
        // Delete target in Frontend
        targetMemo.remove();
    
        // Delete target in Backend
            this.memoArray = this.memoArray.filter(oneMemo => oneMemo.id !== parseInt(targetId))
            sessionStorage.setItem(this.TODOS, JSON.stringify(this.memoArray))
    
        // Update statusBar
        new Status();
    }

    handleOptionBtnClick = (event) => {
        event.preventDefault();
        let targetNode = event.target;
        if (targetNode.tagName === "I") {
            targetNode = targetNode.parentNode;
        }
        targetNode.classList.toggle("clicked");
        const targetContainer = targetNode.parentNode;
    
        if (targetNode.classList.contains("clicked")) {
            // show all option Btns
            const targetHideBtns = targetContainer.querySelectorAll("button.hide");
            targetHideBtns.forEach(targetHideBtn => {
                targetHideBtn.classList.replace("hide", "show");
            })
    
            // targetOptionBtn direction changes to left
            const targetIcon = targetNode.querySelector("i")
            targetIcon.classList.replace("fa-chevron-right", "fa-chevron-left")
        } else {
            // hide all option Btns
            const targetHideBtns = targetContainer.querySelectorAll("button.show");
            targetHideBtns.forEach(targetHideBtn => {
                targetHideBtn.classList.replace("show", "hide");
            })
    
            // targetOptionBtn direction changes to right
            const targetIcon = targetNode.querySelector("i")
            targetIcon.classList.replace("fa-chevron-left", "fa-chevron-right")
        }
    }
    
    handleEditBtnClick = (event) => {
        event.preventDefault();
        let targetNode = event.target;
        if (targetNode.tagName === "I") {
            targetNode = targetNode.parentNode;
        }
        targetNode.classList.toggle("clicked");
        const targetContainer = targetNode.parentNode;
    
        if (targetNode.classList.contains("clicked")) {
            // replace memo title to input bar
            const titleContainer = targetContainer.querySelector(".memo__title");
            const titleInputBar =  document.createElement("input");
            titleInputBar.type = "text";
            titleInputBar.value = titleContainer.innerHTML;
            titleInputBar.classList.add("input");
            targetContainer.replaceChild(titleInputBar, titleContainer)
    
            // replace memo description to input bar
            const descriptionContainer = targetContainer.querySelector(".memo__description");
            const descriptionInputBar =  document.createElement("input");
            descriptionInputBar.type = "text";
            descriptionInputBar.value = descriptionContainer.innerHTML;
            descriptionInputBar.classList.add("input");
            targetContainer.replaceChild(descriptionInputBar, descriptionContainer)
        } else {
            const editedInputBars = targetContainer.querySelectorAll("input.input");
    
            // edit on frontend Section
    
            const editedTitleBox = document.createElement("h2");
            editedTitleBox.className = "memo__title";
            editedTitleBox.innerHTML = editedInputBars[0].value;
    
            const editedDescriptionBox = document.createElement("h5");
            editedDescriptionBox.className = "memo__description";
            editedDescriptionBox.innerHTML = editedInputBars[1].value;
    
            targetContainer.replaceChild(editedTitleBox, editedInputBars[0]);
            targetContainer.replaceChild(editedDescriptionBox, editedInputBars[1]);
    
            // edit on backend Section
            const editedContainerId = targetContainer.id;
                this.memoArray = this.memoArray.map(oneMemo => {
                    if (oneMemo.id === parseInt(editedContainerId)) {
                        return {
                            title: editedInputBars[0].value,
                            description: editedInputBars[1].value,
                            id: oneMemo.id,
                        }
                    } else {
                        return oneMemo;
                    }
                })
    
                sessionStorage.setItem(this.TODOS, JSON.stringify(this.memoArray))
    
            }
            
    }
    
    handleCompleteBtnClick = (event) => {
        event.preventDefault();
        let targetNode = event.target;
        if (targetNode.tagName === "I") {
            targetNode = targetNode.parentNode;
        }
        const targetMemo = targetNode.parentNode;
        const targetId = targetMemo.id;
    
        // Delete target on Frontend
        targetMemo.classList.add("go-complete-area")
        targetMemo.addEventListener("animationend", function() {
            this.remove();
        })
    
        let goToCompleteObj;
    
        // Edit target in Backend
        this.memoArray = this.memoArray.map(oneMemo => {
            if (oneMemo.id === parseInt(targetId)) {
                const newMemoObj = {
                    title: oneMemo.title,
                    description: oneMemo.description,
                    id: oneMemo.id,
                    completed: true,
                }
                goToCompleteObj = newMemoObj;
    
                return newMemoObj;
            } else {
                return oneMemo;
            }
        })
    
        sessionStorage.setItem(this.TODOS, JSON.stringify(this.memoArray))
        
        // Paint target on frontend
        this.paintMemo(goToCompleteObj, this.COMPLETED_FLAG);
    
        // Update statusBar
        new Status();
    
    }

    handleToDoBtnClick = (event) => {
        event.preventDefault();
        let targetNode = event.target;
        if (targetNode.tagName === "I") {
            targetNode = targetNode.parentNode;
        }
        const targetMemo = targetNode.parentNode;
        const targetId = targetMemo.id;
    
        // Delete target in Frontend
        targetMemo.classList.add("go-toDo-area")
        targetMemo.addEventListener("animationend", function() {
            this.remove();
        })
    
        let goToDoObj;
    
        // Edit target in Backend
        this.memoArray = this.memoArray.map(oneMemo => {
            if (oneMemo.id === parseInt(targetId)) {
                const newMemoObj = {
                    title: oneMemo.title,
                    description: oneMemo.description,
                    id: oneMemo.id,
                    completed: false,
                }
                goToDoObj = newMemoObj;
    
                return newMemoObj;
            } else {
                return oneMemo;
            }
        })
    
        sessionStorage.setItem(this.TODOS, JSON.stringify(this.memoArray))
    
        // paint on frontend
        this.paintMemo(goToDoObj, this.TODO_FLAG);
    
        // Update statusBar
        new Status();
    }
    
    handleAddBtnClick = (event) => {
        event.preventDefault();
        let targetNode = event.target;
        if (targetNode.tagName === "I") {
            targetNode = targetNode.parentNode;
        }
        targetNode.classList.toggle("clicked");
        if (targetNode.classList.contains("clicked")) {
            this.jsMemoIcon.classList.replace("fa-plus", "fa-check");
            // show input
            this.jsMemoInputBox.classList.replace("hide", "show");
        } else {
            this.jsMemoIcon.classList.replace("fa-check", "fa-plus");
            // hide input
            this.jsMemoInputBox.classList.replace("show", "hide");
    
            const idLists = this.memoArray.map(obj => obj.id);
            const maxId = Math.max.apply(null, idLists);
    
            const newMemoObj = {
                title: this.jsMemoInput[0].value,
                description: this.jsMemoInput[1].value,
                id: this.memoArray.length === 0 ? 1 : parseInt(maxId) + 1,
                completed: false,
            }
    
            if (newMemoObj.title !== "") {
    
                // Frontend Process
                this.paintMemo(newMemoObj, this.TODO_FLAG);
    
                // Backend Process
                this.memoArray.push(newMemoObj);
                this.saveMemo(this.memoArray);
            }
    
            // Update statusBar
            new Status();
    
            // Input 값 초기화
            [this.jsMemoInput[0].value, this.jsMemoInput[1].value] = ["", ""];
        }
    }
    
}

new Memo();