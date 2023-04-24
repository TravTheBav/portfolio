let doorBell = document.querySelector('button.door_bell');
let door = document.querySelector('.door');

doorBell.addEventListener('click', function () {
    door.classList.add('open');
})