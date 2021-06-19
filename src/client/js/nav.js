const jsNavBtn = document.querySelector("#jsNavBtn");
const jsNavIcon = jsNavBtn ? (jsNavBtn.querySelector("i")) : null;
const jsNavUl = document.querySelector("#jsNavUl")

function handleNavBtn(event) {
    event.preventDefault();
    jsNavBtn.classList.toggle("btn-clicked");
    if (jsNavBtn.classList.contains("btn-clicked")) {
        if (jsNavUl.classList.contains("init-hide")) {
            jsNavUl.classList.replace("init-hide", "show-slider")
        } else {
            jsNavUl.classList.replace("hide-slider", "show-slider")
        }
    } else {
        jsNavUl.classList.replace("show-slider", "hide-slider")
    }
}

function initNav() {
    jsNavBtn.addEventListener("click", handleNavBtn);
}

if (jsNavBtn && jsNavUl) {
    initNav();
}