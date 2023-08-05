function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function linkToGithub(event, url) {
    event.stopPropagation();
    window.open(url, '_blank').focus();
}

function hamburgerMenu() {
    let hamburger = document.querySelector('.burger');
    let navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        if (navLinks.classList.contains('collapsed')) {
            navLinks.classList.remove('collapsed');
        }   else {
            navLinks.classList.add('collapsed');
        }
    });
};

function lightSwitch() {
    let lightButton = document.querySelector('.page-theme-toggler img');

    lightButton.addEventListener('click', function () {
        if (document.body.classList.contains('dark')) {
            lightMode();
        }   else {
            darkMode();
        }
    });
};

function darkMode() {
    let lightButton = document.querySelector('.page-theme-toggler img');
    let body = document.body;
    let navBar = document.querySelector('.nav-bar');
    let projects = document.querySelector('.projects-wrapper');
    let affectedElements = [body, navBar, lightButton];

    if (projects) {
        Array.from(projects.children).forEach( project_card => {
            affectedElements.push(project_card);
        })
    }
    
    affectedElements.forEach( element => {
        element.classList.add('dark');
    });
    sessionStorage.setItem('mode', 'dark');
}

function lightMode() {
    let lightButton = document.querySelector('.page-theme-toggler img');
    let body = document.body;
    let navBar = document.querySelector('.nav-bar');
    let projects = document.querySelector('.projects-wrapper');
    let affectedElements = [body, navBar, lightButton];

    if (projects) {
        Array.from(projects.children).forEach( project_card => {
            affectedElements.push(project_card);
        })
    }

    affectedElements.forEach( element => {
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