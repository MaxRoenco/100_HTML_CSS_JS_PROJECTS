let modal = document.querySelector('.modal');
let homeButton = document.querySelector('#homeButton');
let modalButton = document.querySelector('#modalButton');
let close = document.querySelector('.cancel');

homeButton.addEventListener('click', () => {
    modal.style.display = 'flex';
    window.addEventListener('click', handleClickOutside);
});

modalButton.addEventListener('click', () => {
    modal.style.display = 'none';
    window.removeEventListener('click', handleClickOutside);
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
    window.removeEventListener('click', handleClickOutside);
});

function handleClickOutside(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        window.removeEventListener('click', handleClickOutside);
    }
}
