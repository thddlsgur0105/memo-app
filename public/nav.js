const jsNavContainer = document.querySelector(".nav"),
      jsNavMain = document.querySelector(".nav__main"),
      jsNavIcon = jsNavMain.querySelector("i"),
      jsNavSearch = jsNavContainer.querySelector(".nav__search"),
      jsNavMemo = jsNavContainer.querySelector(".nav__memo");

function handleNavEnter() {
    jsNavIcon.classList.replace("far", "fas");

    //SUB
    jsNavSearch.classList.add("moveTopLeft");
    jsNavMemo.classList.add("moveTopRight");
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