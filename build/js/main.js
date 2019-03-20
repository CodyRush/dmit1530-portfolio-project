let toggleNavStatus = false;
let buttonClicked = false;

let toggleNav = function() {
    let getNav = document.querySelector(".mobile-menu");
    
    if (toggleNavStatus === false) {
        getNav.style.top = "5rem";

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getNav.style.top = "-100rem";

        toggleNavStatus = false;
    }

}

let closeMenu = function() {
    let grabNav = document.querySelector(".mobile-menu");

    grabNav.style.top = "-100rem";
}