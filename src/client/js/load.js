const jsLoadContainer = document.querySelector("#jsLoadContainer");
const jsLoadCard = jsLoadContainer ? (jsLoadContainer.querySelector("#jsLoadCard")) : null;
const jsLoadInputBox = jsLoadCard ? (jsLoadCard.querySelector("#jsLoadInputBox")) : null;
const jsLoadInput = jsLoadInputBox ? (jsLoadInputBox.querySelectorAll("input")) : null;
const jsLoadInputBtn = jsLoadInputBox ? (jsLoadInputBox.querySelector("#jsLoadInputBtn")) : null;
const jsLoadResult = jsLoadCard ? (jsLoadCard.querySelector("#jsLoadResult")) : null;

let flagArray;

function paintLink(obj) {
    const [name, link, id]  = [obj.name, obj.link, obj.id];

    // container
    const linkContainer = document.createElement("a");
    linkContainer.classList.add("welcome__link")
    linkContainer.href = link;
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

    jsLoadResult.appendChild(linkContainer)
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

function saveLink(array) {
    localStorage.setItem("links", JSON.stringify(array))
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