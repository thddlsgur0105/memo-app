const jsNavContainer = document.querySelector(".nav"),
      jsNavMain = document.querySelector(".nav__main"),
      jsNavIcon = jsNavMain.querySelector("i"),
      jsNavSearch = jsNavContainer.querySelector(".nav__search");

function handleNavEnter() {
    jsNavIcon.classList.replace("far", "fas");

    //SUB
    jsNavSearch.classList.add("moveTopLeft")
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