const jsLoadContainer = document.querySelector("#jsLoadContainer");
const jsLoadCard = jsLoadContainer ? (jsLoadContainer.querySelector("#jsLoadCard")) : null;
const jsLoadInputBox = jsLoadCard ? (jsLoadCard.querySelector("#jsLoadInputBox")) : null;
const jsLoadInput = jsLoadInputBox ? (jsLoadInputBox.querySelectorAll("input")) : null;
const jsLoadInputBtn = jsLoadInputBox ? (jsLoadInputBox.querySelector("#jsLoadInputBtn")) : null;
const jsLoadResult = jsLoadCard ? (jsLoadCard.querySelector("#jsLoadResult")) : null;

let flagArray;

function saveLink(array) {
    localStorage.setItem("links", JSON.stringify(array))
}

function handleContainerHover(event) {
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

function handleContainerLeave(event) {
    const targetContainer = event.target;
    const targetBtn = targetContainer.querySelector(".link__btn");
    targetContainer.classList.replace("hovered", "leaved");
    targetBtn.classList.replace("show-btn", "hide-btn");
}

function handleDeleteBtnClick(event) {
    let targetNode = event.target;
    if (targetNode.tagName === "I") {
        targetNode = targetNode.parentNode;
    } 
    const targetContainer = targetNode.parentNode;
    const targetId = targetContainer.querySelector("a").id;
    
    // frontend process
    jsLoadResult.removeChild(targetContainer);

    // backend process
    flagArray = flagArray.filter(one => one.id !== parseInt(targetId));
    saveLink(flagArray);
}

function paintLink(obj) {
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
    deleteBtn.addEventListener("click", handleDeleteBtnClick);
    
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash");
    deleteBtn.appendChild(deleteIcon);
    
    linkContainer.appendChild(linkAnchor);
    linkContainer.appendChild(deleteBtn);

    linkContainer.addEventListener("mouseenter", handleContainerHover);
    linkContainer.addEventListener("mouseleave", handleContainerLeave);

    jsLoadResult.appendChild(linkContainer);
}

function handleInputBtnClick(event) {
    event.preventDefault();
    const [name, link] = [jsLoadInput[0].value, jsLoadInput[1].value];
    const newObj = {
        name,
        link,
        id: flagArray.length + 1,
    };

    [jsLoadInput[0].value, jsLoadInput[1].value] = ["",""];

    // frontend process
    paintLink(newObj);
    flagArray.push(newObj);

    // backend process
    saveLink(flagArray);
}

function LoadInit() {
    // localStorage에 있는 저장된 데이터 로딩
    const loadedArray = localStorage.getItem("links");
    const parsedArray = JSON.parse(loadedArray);
    if (parsedArray) {
        flagArray = [];
        parsedArray.forEach((parsedOne) => {
            const newObj = {
                name: parsedOne.name,
                link: parsedOne.link,
                id: flagArray.length + 1,
            };

            // frontend process
            paintLink(newObj);
            flagArray.push(newObj);
        });

        // backend process
        saveLink(flagArray)
    }
    
    // btn에 이벤트 리스너 설정
    jsLoadInputBtn.addEventListener("click", handleInputBtnClick);
}

if (jsLoadContainer) {
    LoadInit();
}