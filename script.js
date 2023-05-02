// preload background image
let image = new Image();
image.src = "images/dark_floor_texture.png";

function setupDoorBell() {
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

function setupLightSwitch() {
    let lightSwitch = document.querySelector('.light_switch img');
    let body = document.body;

    lightSwitch.addEventListener('click', function () {
        if (lightSwitch.classList.contains('light')) {
            lightSwitch.classList.remove('light');
            lightSwitch.classList.add('dark');
            body.classList.remove('light');
            body.classList.add('dark');
        }   else {
            lightSwitch.classList.remove('dark');
            lightSwitch.classList.add('light');
            body.classList.remove('dark');
            body.classList.add('light');
        }
    });
};

function initPageFunctions() {
    setupDoorBell();
    setupLightSwitch();
}

initPageFunctions();