let menu = document.querySelector('.menu');
let links = document.querySelectorAll('li');
let highlight = document.querySelector('.highlight');
let button = document.querySelector('.btn');

button.addEventListener('click', function () {
    if (this.dataset.open === "close") {
        menu.style.clipPath = "circle(100% at 50% 50%)";
        this.dataset.open = "open";
    } else {
        menu.style.clipPath = "";
        this.dataset.open = "close";
        highlight.style = "";
    }
});

links.forEach(link => {
    link.addEventListener("pointerover", function () {
        const w = this.offsetWidth,
            h = this.offsetHeight,
            t = this.offsetTop;
        highlight.style.cssText = `transform: translateY(${t}px); width: ${w}px; height:${h}px;`
    })
})