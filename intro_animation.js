function doorBell() {
    if (window.location.href.indexOf('home.html') !== -1) {  // only run this code if running the first instance of index page with the door animation
        return;
    }

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

doorBell();