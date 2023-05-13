function hamburgerMenu() {
    let hamburger = document.querySelector('.burger');
    let navLinks = document.querySelector('.nav_links');

    hamburger.addEventListener('click', function () {
        if (navLinks.classList.contains('collapsed')) {
            navLinks.classList.remove('collapsed');
        }   else {
            navLinks.classList.add('collapsed');
        }
    });
};

function lightSwitch() {
    lightButton = document.querySelector('.light_switch img');

    lightButton.addEventListener('click', function () {
        if (document.body.classList.contains('light')) {
            darkMode();
        }   else {
            lightMode();
        }
    });
};

function darkMode() {
    body = document.body;
    navBar = document.querySelector('.nav_bar');
    affectedElements = [body, navBar];
    affectedElements.forEach( element => {
        element.classList.add('dark');
        element.classList.remove('light');
    });
    sessionStorage.setItem('mode', 'dark');
}

function lightMode() {
    body = document.body;
    navBar = document.querySelector('.nav_bar');
    affectedElements = [body, navBar];
    affectedElements.forEach( element => {
        element.classList.add('light');
        element.classList.remove('dark');
    });
    sessionStorage.setItem('mode', 'light');
}

function checkForPageTheme() {
    if (sessionStorage.getItem('mode') == 'dark') {
        darkMode();
    }   else {
        lightMode();
    }
}

function initPageFunctions() {
    checkForPageTheme();
    hamburgerMenu();
    lightSwitch();
}

initPageFunctions();