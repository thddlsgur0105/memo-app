import "../scss/styles.scss";

const jsMemoHeader = document.querySelector("#jsMemoHeader");
const jsMemoBtn = jsMemoHeader.querySelector("#jsMemoBtn");
const jsMemoIcon = jsMemoBtn.querySelector("#jsMemoIcon");
const jsMemoInput = jsMemoHeader.querySelector("#jsMemoInput");
const jsMemoContents = jsMemoInput.querySelectorAll("input")
const jsMemoMain = document.querySelector("#jsMemoMain"); 
const jsNewMemoSection = jsMemoMain.querySelector(".memo-section");

let memoArray = [];

function saveMemo(obj) {
    memoArray.push(obj);
    sessionStorage.setItem("toDos", JSON.stringify(memoArray));
}

function handleDeleteBtnClick(event) {
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
    memoArray = memoArray.filter(oneMemo => oneMemo.id !== parseInt(targetId))
    sessionStorage.setItem("toDos", JSON.stringify(memoArray))
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
        // show all option Btns
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
    }
}

function paintMemo(obj) {

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

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "hide")
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash", "fa-lg");
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.addEventListener("click", handleDeleteBtnClick);

    // edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "hide");
    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-pen", "fa-lg");
    editBtn.appendChild(editIcon);
    editBtn.addEventListener("click", handleEditBtnClick);

    // option button
    const optionBtn = document.createElement("button");
    optionBtn.className = "btn";
    const optionIcon = document.createElement("i");
    optionIcon.classList.add("fas", "fa-chevron-right", "fa-lg");
    optionBtn.appendChild(optionIcon);
    optionBtn.addEventListener("click", handleOptionBtnClick);

    divBox.appendChild(titleBox);
    divBox.appendChild(descriptionBox);
    divBox.appendChild(deleteBtn);
    divBox.appendChild(editBtn);
    divBox.appendChild(optionBtn);
    jsNewMemoSection.appendChild(divBox);
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
        jsMemoInput.classList.replace("hide", "show");
    } else {
        jsMemoIcon.classList.replace("fa-check", "fa-plus");
        // hide input
        jsMemoInput.classList.replace("show", "hide");

        const newMemoObj = {
            title: jsMemoContents[0].value,
            description: jsMemoContents[1].value,
            id: memoArray.length + 1,
        }

        if (newMemoObj.title !== "") {

            // Frontend Process
            paintMemo(newMemoObj);

            // Backend Process
            saveMemo(newMemoObj);
        }
    }
}


function init() {

    // 기존의 sessionStorage 내용 로드
    const loadedArray = sessionStorage.getItem("toDos");
    const parsedArray = JSON.parse(loadedArray);
    
    const jsonArray = []

    if (parsedArray) {
        parsedArray.forEach(oneMemo => {
            const memoObj = {
                title: oneMemo.title,
                description: oneMemo.description,
                id: memoArray.length + 1,
            }

            jsonArray.push(memoObj);

            // frontend Process
            paintMemo(memoObj);

            // backend process
            saveMemo(memoObj);
        });

        const stringifiedArray = JSON.stringify(jsonArray);

        const httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', "server", true);
        httpRequest.send(stringifiedArray);

    }

    // memo click Btn 활성화
    if (jsMemoHeader) {
        jsMemoBtn.addEventListener("click", handleAddBtnClick);
    }
}

init();