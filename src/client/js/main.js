import "../scss/styles.scss";

const jsMemoHeader = document.querySelector("#jsMemoHeader");
const jsMemoBtn = jsMemoHeader.querySelector("#jsMemoBtn");
const jsMemoIcon = jsMemoBtn.querySelector("#jsMemoIcon");
const jsMemoInput = jsMemoHeader.querySelector("#jsMemoInput");

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
    }
}

if (jsMemoHeader) {
    jsMemoBtn.addEventListener("click", handleBtnClick);
}