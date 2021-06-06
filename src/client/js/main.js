import "../scss/styles.scss";

const jsMemoBtn = document.querySelector("#jsMemoBtn")

function handleBtnClick(event) {
    event.preventDefault();
    console.log(event)
}

jsMemoBtn.addEventListener("click", handleBtnClick);