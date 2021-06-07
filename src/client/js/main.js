import "../scss/styles.scss";

const jsMemoHeader = document.querySelector("#jsMemoHeader");
const jsMemoBtn = jsMemoHeader.querySelector("#jsMemoBtn")

function handleBtnClick(event) {
    event.preventDefault();
    let targetNode = event.target;
    if (targetNode.tagName === "I") {
        targetNode = targetNode.parentNode;
    }
    targetNode.classList.toggle("clicked");
}

if (jsMemoHeader) {
    jsMemoBtn.addEventListener("click", handleBtnClick);
}