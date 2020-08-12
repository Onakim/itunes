import { addZero } from './supScript.js';
export const videoPlayerInit = () => {
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimeTotal = document.querySelector('.video-time__total');
    const videoVolume = document.querySelector('.video-volume');
    const videoFullscreen = document.querySelector('.video-fullscreen');
    const toggleIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        } else {
            videoButtonPlay.classList.add('fa-pause');
            videoButtonPlay.classList.remove('fa-play');
        }
    };

    const togglePlay = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
     };

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    };

    // умова ? (умова вірна) : (умова невірна)
    //const addZero = n => n < 10 ? '0' + n : n;//додавання нуля на таймерах

    videoFullscreen.addEventListener('click', () => {
        videoPlayer.requestFullscreen();
    });

    videoPlayer.addEventListener('click', togglePlay); //активація відео по кліку на плеєр
    videoButtonPlay.addEventListener('click', togglePlay);//активація відео по кліку плей
    videoPlayer.addEventListener('play', toggleIcon); //зміна іконки плей на паузу
    videoPlayer.addEventListener('pause', toggleIcon);//зміна іконки паузи на плей
    videoButtonStop.addEventListener('click', stopPlay);//зупинка відео і перемотка на початок
    //шкала таймерів на відео
    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;
        videoProgress.value = ( currentTime / duration) * 100;
        let minutePassed = Math.floor(currentTime / 60);
        let secondPassed = Math.floor(currentTime % 60);
        let minuteTotal = Math.floor(duration / 60);
        let secondTotal = Math.floor(duration % 60);
        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondPassed)}`; //пишемо скільки часу вже йде відео
//      videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondTotal);  //аналогічне нижньому
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondTotal)}`;  //пишемо скільки часу займає відео
        if (currentTime === duration) {stopPlay()};    //якщо відео дійшло до кінця то перевести на початок
    })
    //полоса перемотки відео
    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value;
        videoPlayer.currentTime = (value * duration) / 100;
    });
    //регулювання звуку
    videoVolume.addEventListener('input', () => {
        videoPlayer.volume = videoVolume.value / 100;
    });
    videoPlayer.volume = 0.5;//звук по замовчуванню при вмиканні відео
    videoVolume.value = videoPlayer.volume * 100;//відображення рівня звуку на шкалі

    videoPlayerInit.stop = () => {
        if (!videoPlayer.paused) {
            videoPlayer.pause();
        }
    }


};