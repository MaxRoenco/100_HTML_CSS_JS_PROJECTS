let selectField = document.querySelector('#selectField');
let selectText = document.querySelector('#selectText');
let arrow = document.querySelector('#arrow');
let list = document.querySelector('#list');
let options = document.querySelectorAll('.options');

selectField.addEventListener('click', () => {
    list.classList.toggle('hide');
    arrow.classList.toggle('rotate');
})

options.forEach(value => {
    value.addEventListener('click', (event) => {
        list.classList.toggle('hide');
        arrow.classList.toggle('rotate');
        selectText.innerHTML = event.target.innerHTML;
        selectText.classList.add('changed')
    })
})