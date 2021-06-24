const jsMemoHeader = document.querySelector("#jsMemoHeader");
const jsMemoBtn = jsMemoHeader ? (jsMemoHeader.querySelector("#jsMemoBtn")) : null;
const jsMemoIcon = jsMemoBtn ? (jsMemoBtn.querySelector("#jsMemoIcon")) : null;
const jsMemoInputBox = jsMemoHeader ? (jsMemoHeader.querySelector("#jsMemoInputBox")) : null;
const jsMemoInput = jsMemoInputBox ? (jsMemoInputBox.querySelectorAll("input")) : null;

const jsMemoMain = document.querySelector("#jsMemoMain"); 
const jsNewMemoSection = jsMemoMain ? (jsMemoMain.querySelector(".memo-section")) : null;

const jsMemoMainCompleted = document.querySelector("#jsMemoMainCompleted");
const jsNewMemoSectionCompleted = jsMemoMainCompleted ? (jsMemoMainCompleted.querySelector(".memo-section")) : null;


let memoArray = [];
let memoCompleteArray = [];

function saveMemo(obj, targetList) {
    if (targetList === "toDo") {
        memoArray.push(obj);
        sessionStorage.setItem("toDos", JSON.stringify(memoArray));
    } else if (targetList === "completed") {
        memoCompleteArray.push(obj);
        sessionStorage.setItem("completed", JSON.stringify(memoCompleteArray));
    }
    // 예외 오류처리

}

function handleDeleteBtnClick(event) {
    event.preventDefault();
    let targetNode = event.target;
    if (targetNode.tagName === "I") {
        targetNode = targetNode.parentNode;
    }
    const targetMemo = targetNode.parentNode
    const targetMainSection = targetMemo.parentNode.parentNode;

    const targetId = targetMemo.id;

    // Delete target in Frontend
    targetMemo.remove();

    // Delete target in Backend
    if (targetMainSection.id === "jsMemoMain") {
        memoArray = memoArray.filter(oneMemo => oneMemo.id !== parseInt(targetId))
        sessionStorage.setItem("toDos", JSON.stringify(memoArray))
    } else if (targetMainSection.id === "jsMemoMainCompleted") {
        memoCompleteArray = memoCompleteArray.filter(oneMemo => oneMemo.id !== parseInt(targetId))
        sessionStorage.setItem("completed", JSON.stringify(memoCompleteArray))
    }
}

function handleOptionBtnClick(event) {
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

function handleEditBtnClick(event) {
    event.preventDefault();
    let targetNode = event.target;
    if (targetNode.tagName === "I") {
        targetNode = targetNode.parentNode;
    }
    targetNode.classList.toggle("clicked");
    const targetContainer = targetNode.parentNode;
    const targetMainSection = targetContainer.parentNode.parentNode;

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
        if (targetMainSection.id === "jsMemoMain") {
            memoArray = memoArray.map(oneMemo => {
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

            sessionStorage.setItem("toDos", JSON.stringify(memoArray))

        } else if (targetMainSection.id === "jsMemoMainCompleted") {
            memoCompleteArray = memoCompleteArray.map(oneMemo => {
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

            sessionStorage.setItem("completed", JSON.stringify(memoCompleteArray))

        }
        
    }
}

function handleCompleteBtnClick(event) {
    event.preventDefault();
    let targetNode = event.target;
    if (targetNode.tagName === "I") {
        targetNode = targetNode.parentNode;
    }
    const targetMemo = targetNode.parentNode;
    const targetId = targetMemo.id;

    // Delete target in Frontend
    targetMemo.classList.add("go-complete-area")
    targetMemo.addEventListener("animationend", function() {
        this.remove();
    })

    // Delete target in Backend
    let goCompleteObj;
    memoArray = memoArray.filter(oneMemo => {
        if (oneMemo.id === parseInt(targetId)) {
            goCompleteObj = oneMemo;
        }
        return oneMemo.id !== parseInt(targetId);
    })
    sessionStorage.setItem("toDos", JSON.stringify(memoArray))

    // completed 영역에 해당하는 completeBtn 생성
    const newMemoObj = {
        title: goCompleteObj.title,
        description: goCompleteObj.description,
        id: memoCompleteArray.length + 1,
    }
    
    // paint on frontend
    paintMemo(newMemoObj, "completed");

    // paint on backend
    saveMemo(newMemoObj, "completed");
}

function handleToDoBtnClick(event) {
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

    // Delete target in Backend
    let goToDoObj;
    memoCompleteArray = memoCompleteArray.filter(oneMemo => {
        if (oneMemo.id === parseInt(targetId)) {
            goToDoObj = oneMemo;
        }
        return oneMemo.id !== parseInt(targetId);
    })
    sessionStorage.setItem("completed", JSON.stringify(memoCompleteArray))

    // completed 영역에 해당하는 completeBtn 생성
    const newMemoObj = {
        title: goToDoObj.title,
        description: goToDoObj.description,
        id: memoArray.length + 1,
    }
    
    // paint on frontend
    paintMemo(newMemoObj, "toDo");

    // paint on backend
    saveMemo(newMemoObj, "toDo");
}

function paintMemo(obj, targetList) {

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
    optionBtn.addEventListener("click", handleOptionBtnClick);

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "memo__delete", "hide");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash", "fa-lg");
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.addEventListener("click", handleDeleteBtnClick);

    // edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "memo__edit", "hide");
    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-pen", "fa-lg");
    editBtn.appendChild(editIcon);
    editBtn.addEventListener("click", handleEditBtnClick);

    divBox.appendChild(titleBox);
    divBox.appendChild(descriptionBox);
    divBox.appendChild(optionBtn);
    divBox.appendChild(deleteBtn);
    divBox.appendChild(editBtn);

    if (targetList === "toDo") {
        // go to complete button
        const completeBtn = document.createElement("button");
        completeBtn.classList.add("btn", "memo__complete", "hide");
        const completeIcon = document.createElement("i");
        completeIcon.classList.add("fas", "fa-check", "fa-lg");
        completeBtn.appendChild(completeIcon);
        completeBtn.addEventListener("click", handleCompleteBtnClick);

        // adding completeBtn
        divBox.appendChild(completeBtn);

        // adding to toDoSection
        jsNewMemoSection.appendChild(divBox);
    }

    if (targetList === "completed") {
        // go to toDoBtn
        const toDoBtn = document.createElement("button");
        toDoBtn.classList.add("btn", "memo__toDo", "hide");
        const toDoIcon = document.createElement("i");
        toDoIcon.classList.add("fas", "fa-reply", "fa-lg");
        toDoBtn.appendChild(toDoIcon);
        toDoBtn.addEventListener("click", handleToDoBtnClick);

        // adding toDoBtn
        divBox.appendChild(toDoBtn);

        // adding to completedSection
        jsNewMemoSectionCompleted.appendChild(divBox);
    }
}

function handleAddBtnClick(event) {
    event.preventDefault();
    let targetNode = event.target;
    if (targetNode.tagName === "I") {
        targetNode = targetNode.parentNode;
    }
    targetNode.classList.toggle("clicked");
    if (targetNode.classList.contains("clicked")) {
        jsMemoIcon.classList.replace("fa-plus", "fa-check");
        // show input
        jsMemoInputBox.classList.replace("hide", "show");
    } else {
        jsMemoIcon.classList.replace("fa-check", "fa-plus");
        // hide input
        jsMemoInputBox.classList.replace("show", "hide");

        const newMemoObj = {
            title: jsMemoInput[0].value,
            description: jsMemoInput[1].value,
            id: memoArray.length + 1,
        }

        if (newMemoObj.title !== "") {

            // Frontend Process
            paintMemo(newMemoObj, "toDo");

            // Backend Process
            saveMemo(newMemoObj, "toDo");
        }
    }
}


function initMemo() {

    // 기존의 sessionStorage 할 일들 내용 로드
    const loadedArray = sessionStorage.getItem("toDos");
    let parsedArray;

    if (!loadedArray) {
        parsedArray = null;
    } else {
        parsedArray = JSON.parse(loadedArray);
    }
    
    if (parsedArray) {
        parsedArray.forEach(oneMemo => {
            const memoObj = {
                title: oneMemo.title,
                description: oneMemo.description,
                id: memoArray.length + 1,
            }

            // frontend Process
            paintMemo(memoObj, "toDo");

            // backend process
            saveMemo(memoObj, "toDo");
        });
    
    }

    // 기존의 sessionStorage 한 일들 내용 로드
    const loadedCompletedArray = sessionStorage.getItem("completed");
    let parsedCompletedArray;

    if (!loadedCompletedArray) {
        parsedCompletedArray = null;
    } else {
        parsedCompletedArray = JSON.parse(loadedCompletedArray);
    }

    if (parsedCompletedArray) {
        parsedCompletedArray.forEach(oneMemo => {
            const memoObj = {
                title: oneMemo.title,
                description: oneMemo.description,
                id: memoCompleteArray.length + 1,
            };

            // frontend process
            paintMemo(memoObj, "completed");

            // backend process
            saveMemo(memoObj, "completed");
        })
    }

    // memo click Btn 활성화
    
    jsMemoBtn.addEventListener("click", handleAddBtnClick);
}

if (jsMemoHeader && jsMemoMain) {
    initMemo();
}