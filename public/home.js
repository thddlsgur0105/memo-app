const jsForm = document.querySelector(".js-form"),
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

// 1st. User localStorage Data Loading
const currentUser = localStorage.getItem(USER_LS);

// 2nd. Checking 
if (currentUser) {
    // user Data exists
} else {
    jsForm.className ="showing";
    jsForm.addEventListener("submit", handleSubmit);
}