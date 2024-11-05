let increment = document.querySelector('.increment');
let save = document.querySelector('.save');
let output = document.querySelector('.output');
let list = document.querySelector('.list');

let number = Number(output.innerHTML);

increment.addEventListener('click', () => {
    number++;
    output.textContent = number;
})

save.addEventListener('click', () => {
    list.textContent += `${number}, ` + "  ";
    list.textContent += "  "
    number = 0;
    output.textContent = number;
})