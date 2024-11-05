let blocks = document.querySelectorAll(".block");
console.log(blocks);
let xo = "x";

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

blocks.forEach(function(e, i) {
    e.addEventListener("click", function() {
        e.textContent = xo;
        xo = xo == "x" ? "o" : "x";
        win.forEach(function(e, i) {
            let e1 = blocks[e[0]].textContent;
            let e2 = blocks[e[1]].textContent;
            let e3 = blocks[e[2]].textContent;
            if (e1 == e2 && e2 == e3) {
                console.log(e1);
            }
        })
    })
})