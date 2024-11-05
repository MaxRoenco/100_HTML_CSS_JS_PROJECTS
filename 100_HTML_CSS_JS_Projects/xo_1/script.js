let cells = document.querySelectorAll(".cell");
let winner = document.querySelector("#winner");
let won = false;
let player = "X";
let counter = 0;
let reset = () => {
    counter = 0;
    player = "X";
    won = false;
    cells.forEach(e => e.textContent = "");
    winner.textContent = "";
};
let say = str => winner.textContent = str;
let winCases = [[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]]
cells.forEach((e, i) => {
    e.addEventListener("click", _ => {
        if(e.textContent != "" || won) return;
        counter++;
        e.textContent = player;
        player = player == "X" ? "O" : "X";
        winCases.forEach(w => {
            let x1 = cells[w[0]].textContent;
            let x2 = cells[w[1]].textContent;
            let x3 = cells[w[2]].textContent;
            if(x1 == "") return;
            if(x1 == x2 && x2 == x3) {
                won = true;
                say(x1 + " won");
                setTimeout(reset, 3000);
            }
        })
        if(counter == 9 && !won) {
            won = true;
            say("Draw");
            setTimeout(reset, 3000);
        }
    })
})