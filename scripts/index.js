// Імпорти
import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';
//обявляємо змінні
const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');
//Функції
const deactivationPlayer = () => {
    temp.style.display = 'none';
    //temp.getElementsByClassName.display = 'none';
    playerBtn.forEach(item =>  item.classList.remove('active'));
    playerBlock.forEach(item =>  item.classList.remove('active'));

    videoPlayerInit.stop();
    radioPlayerInit.stop();
    musicPlayerInit.stop();
}
//обробники собитій
playerBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    })
})
//визови функцій
radioPlayerInit();
musicPlayerInit();
videoPlayerInit();