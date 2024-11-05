let button = document.querySelector(".button");
let body = document.querySelector("body");

button.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.background = `#${randomColor}`;
    console.log(randomColor);
    button.innerHTML = `${randomColor}`;
    button.style.background = `#${randomColor}`;

})