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
    localStorage.setItem("myMemo", JSON.stringify(memoArray));
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
    // 기존의 localStorage 내용 로드
    memoArray = memoArray.filter(oneMemo => oneMemo.id !== parseInt(targetId))
    localStorage.setItem("myMemo", JSON.stringify(memoArray))
}

function paintMemo() {
    // object id for delete Btn
    const newId = memoArray.length + 1;
    obj = { title: jsMemoContents[0].value, description: jsMemoContents[1].value, id: newId }

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
    deleteBtn.className = "btn";
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash", "fa-lg");
    deleteBtn.appendChild(deleteIcon);

    deleteBtn.addEventListener("click", handleDeleteBtnClick);

    // edit button
    const editBtn = document.createElement("button");
    editBtn.className = "btn";
    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-pen", "fa-lg");
    editBtn.appendChild(editIcon);

    // option button
    const optionBtn = document.createElement("button");
    optionBtn.className = "btn";
    const optionIcon = document.createElement("i");
    optionIcon.classList.add("fas", "fa-chevron-left", "fa-lg");
    optionBtn.appendChild(optionIcon);

    divBox.appendChild(titleBox);
    divBox.appendChild(descriptionBox);
    divBox.appendChild(deleteBtn);
    divBox.appendChild(editBtn);
    divBox.appendChild(optionBtn);
    jsNewMemoSection.appendChild(divBox);

    // backend process
    saveMemo(obj);
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

        // 저장하는 것이 가능한 데이터라면
        if (newMemoObj.title !== "") {
            // Frontend Process && Backend Process
            paintMemo();
        }
    }
}


function init() {

    // 기존의 localStorage 내용 로드
    loadedArray = localStorage.getItem("myMemo");
    parsedArray = JSON.parse(loadedArray);
    

    if (parsedArray) {
        parsedArray.forEach(oneMemo => {
            // frontend Process
            paintMemo();
        });
    }

    // memo click Btn 활성화
    if (jsMemoHeader) {
        jsMemoBtn.addEventListener("click", handleAddBtnClick);
    }
}

init();