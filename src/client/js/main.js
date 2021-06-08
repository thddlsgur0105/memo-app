import "../scss/styles.scss";

const jsMemoHeader = document.querySelector("#jsMemoHeader");
const jsMemoBtn = jsMemoHeader.querySelector("#jsMemoBtn");
const jsMemoIcon = jsMemoBtn.querySelector("#jsMemoIcon");
const jsMemoInput = jsMemoHeader.querySelector("#jsMemoInput");
const jsMemoContents = jsMemoInput.querySelectorAll("input")
const jsMemoMain = document.querySelector("#jsMemoMain"); 
const jsNewMemoSection = jsMemoMain.querySelector(".memo-section");

function newMemo(obj) {
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

    divBox.appendChild(titleBox);
    divBox.appendChild(descriptionBox);
    divBox.appendChild(deleteBtn);
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
        // newMemo를 프론트엔드로 화면의 jsMemoMain 영역에 생성
        newMemo(newMemoObj);
        // 백엔드로 그 해당 newMemo에 관한 내용을 mongo 데이터베이스에 저장
        // 화면 새로고침 시 데이터베이스의 내용들이 로드되면서 프론트엔드가 사라지고 결과는 다르지 않게 됨
        
        
        // 삭제 시 프론트엔드 단에서 요소 제거 -> 백엔드에서 관련 요소 제거 -> 새로고침 시 없어짐
    }
}

if (jsMemoHeader) {
    jsMemoBtn.addEventListener("click", handleBtnClick);
}