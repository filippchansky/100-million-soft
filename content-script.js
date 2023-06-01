// const tabBtn = document.getElementById('tabBtn')
// tabBtn.addEventListener('click', () => {
//     console.log('click')
// })

const btnclick = document.querySelector('.ytp-volume-panel')

btnclick.addEventListener("click", function (){
    btnclick.blur()
})

btnclick.tab

// const pauseBtn = document.getElementsByClassName("ytp-play-button");

// // Подписаться на событие нажатия кнопки "Пауза"
// pauseBtn.addEventListener("click", () => {
//   // Отправить сообщение в background-скрипт
//   chrome.runtime.sendMessage({eventType: "pauseButtonClicked"});
// });