// preload background image
let image = new Image();
image.src = "images/doom_textures/dark_floor_texture.png";

function doorBell() {
    let container = document.querySelector('.container');
    let doorBell = document.querySelector('button.door_bell');
    let door = document.querySelector('.door');
    let statusBar = document.querySelector('.status_bar');
    
    doorBell.addEventListener('click', function () {
        door.classList.add('open');
        statusBar.classList.add('open');
        setTimeout(() => { document.body.removeChild(container) }, 1600);
    })
};

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
    let lightSwitch = document.querySelector('.light_switch img');
    let body = document.body;
    let navBar = document.querySelector('.nav_bar');
    let affectedElements = [lightSwitch, body, navBar];

    lightSwitch.addEventListener('click', function () {
        affectedElements.forEach(function(element) {
            if (element.classList.contains('light')) {
                element.classList.remove('light');
                element.classList.add('dark');
            }   else {
                element.classList.remove('dark');
                element.classList.add('light');
            }
        });
    });
};

function initPageFunctions() {
    doorBell();
    hamburgerMenu();
    lightSwitch();    
}

initPageFunctions();