let copyText = document.getElementById('copyText');
let moveText = document.getElementById('moveText');
let leftAreaText = document.getElementById('leftTextArea');
let rightAreaText = document.getElementById('rightTextArea');
let output = document.querySelector('.output');

copyText.addEventListener('click', () => {
    leftAreaText.select();
    leftAreaText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(leftAreaText.value)
        .then(() => {
            output.style.display = 'flex';
            output.innerHTML = `Text: "${leftAreaText.value}" was coppied`
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});

moveText.addEventListener('click', () => {
    rightAreaText.value = leftAreaText.value;
})