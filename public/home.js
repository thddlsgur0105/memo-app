const jsForm = document.querySelector("#js-form"),
    jsInput = jsForm.querySelector("input"),
    jsHello = document.querySelector(".hello")

const USER_LS = "currentUser";

function paintGreeting(text) {
    jsHello.className = "showing";
    jsHello.innerHTML = `Hello ${text}!`;
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = jsInput.value;
    jsInput.value = "";
    paintGreeting(currentValue);
    jsForm.className = "removing";
    localStorage.setItem(USER_LS, currentValue);
}

function loadData() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser) {
        paintGreeting(currentUser);
    } else {
        jsForm.className ="showing";
        jsForm.addEventListener("submit", handleSubmit);
    }
}

function init() {
    loadData();
}

init();