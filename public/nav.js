const jsNavContainer = document.querySelector(".nav"),
      jsNavMain = document.querySelector(".nav__main"),
      jsNavIcon = jsNavMain.querySelector("i"),
      jsNavSub = jsNavContainer.querySelector(".nav__sub");

function handleNavEnter() {
    jsNavIcon.classList.replace("far", "fas");

    //SUB
    jsNavSub.classList.add("move")
}

function handleNavLeave() {
    jsNavIcon.classList.replace("fas", "far");

    //SUB
}

function init() {
    jsNavContainer.addEventListener("mouseenter", handleNavEnter);
    jsNavContainer.addEventListener("mouseleave", handleNavLeave);
}

init();