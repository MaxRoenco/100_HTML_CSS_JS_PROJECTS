const btn = document.getElementById('emodji');

let arr = ["😊", "🤣", "❤", "😍", "😒", "👌", "😘", "😁", "💕", "👍", "🙌", "😎", "😉", "😢", "😜", "👏", "✌", "🤞", "🌹", "🎉"];

btn.addEventListener('click', () => {
    btn.textContent = arr[Math.floor(Math.random() * arr.length)]
})