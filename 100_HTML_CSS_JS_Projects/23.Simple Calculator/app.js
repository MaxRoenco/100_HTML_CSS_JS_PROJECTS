
let button = document.querySelector('.button');


button.addEventListener('click', function () {
    let firstNumber = document.getElementById('number1').value;
    let secondNumber = document.getElementById('number2').value;
    let result = document.querySelector('.result');
    let operation = document.getElementById('operation').value;
    switch (operation) {
        case "plus":
            result.innerHTML = `Result: ${Number(firstNumber) + Number(secondNumber)}`;
            break;
        case "minus":
            result.innerHTML = `Result: ${Number(firstNumber) - Number(secondNumber)}`;
            break;
        case "dev":
            result.innerHTML = `Result: ${Number(firstNumber) / Number(secondNumber)}`;
            break;
        case "multi":
            result.innerHTML = `Result: ${Number(firstNumber) * Number(secondNumber)}`;
            break;
    }
})