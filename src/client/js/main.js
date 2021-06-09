import "../scss/styles.scss";

const jsMemoHeader = document.querySelector("#jsMemoHeader");
const jsMemoBtn = jsMemoHeader.querySelector("#jsMemoBtn");
const jsMemoIcon = jsMemoBtn.querySelector("#jsMemoIcon");
const jsMemoInput = jsMemoHeader.querySelector("#jsMemoInput");
const jsMemoContents = jsMemoInput.querySelectorAll("input")
const jsMemoMain = document.querySelector("#jsMemoMain"); 
const jsNewMemoSection = jsMemoMain.querySelector(".memo-section");

var memoArray = [];

function saveMemo(obj) {
    memoArray.push(obj);
    localStorage.setItem("myMemo", JSON.stringify(memoArray));
}

function paintMemo(obj) {
    // .memo box
    const divBox = document.createElement("div");
    divBox.className = "memo";

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

    // edit button
    const editBtn = document.createElement("button");
    editBtn.className = "btn";
    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-pen", "fa-lg");
    editBtn.appendChild(editIcon);

    // complete button
    const completeBtn = document.createElement("button");
    completeBtn.className = "btn";
    const completeIcon = document.createElement("i");
    completeIcon.classList.add("fas", "fa-chevron-down", "fa-lg");
    completeBtn.appendChild(completeIcon);

    divBox.appendChild(titleBox);
    divBox.appendChild(descriptionBox);
    divBox.appendChild(deleteBtn);
    divBox.appendChild(editBtn);
    divBox.appendChild(completeBtn);
    jsNewMemoSection.appendChild(divBox);
}

function getInput(contents) {
    const title = contents[0].value;
    const description = contents[1].value;
    return { title, description }
}

function handleBtnClick(event) {
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
        const newMemoObj = getInput(jsMemoContents);
        // 저장하는 것이 가능한 데이터라면
        if (newMemoObj.title !== "") {
            // Frontend Process
            paintMemo(newMemoObj);

            // Backend Process -- localStorage Procass
            saveMemo(newMemoObj);
        }
    }
}


function init() {
    // 기존의 localStorage 내용 로드
    let myMemo = localStorage.getItem("myMemo");
    myMemo = JSON.parse(myMemo);

    // frontend Process
    myMemo.forEach(oneMemo => {
        paintMemo(oneMemo);
    });

    // backend Process
    memoArray.push(myMemo);

    // memo click Btn 활성화
    if (jsMemoHeader) {
        jsMemoBtn.addEventListener("click", handleBtnClick);
    }
}

init();