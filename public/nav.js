const jsNavMain = document.querySelector(".nav__main"),
      jsNavIcon = jsNavMain.querySelector("i"),
      jsNavSub = document.querySelector(".nav__sub");

function handleNavEnter() {
    jsNavIcon.classList.replace("far", "fas");

    //SUB
    jsNavSub.classList.replace("removing", "showing");
    jsNavSub.classList.add("left-top-position");
}

function handleNavLeave() {
    jsNavIcon.classList.replace("fas", "far");

    //SUB
    jsNavSub.classList.replace("showing", "removing");
}

function init() {
    jsNavMain.addEventListener("mouseenter", handleNavEnter);
    jsNavMain.addEventListener("mouseleave", handleNavLeave);
}

init();