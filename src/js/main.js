let toggleNavStatus = false;

let toggleNav = function() {
    let getNav = document.querySelector(".mobile-menu");
    
    if (toggleNavStatus === false) {
        getNav.style.top = "5rem";

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getNav.style.top = "-55vh";

        toggleNavStatus = false;
    }

}