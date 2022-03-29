//css
import './styles/app.css';

//js
import $ from 'jquery';
import './bootstrap'
import Player from '@vimeo/player/dist/player.min';
// function getCurrentTime(player)
// {
//     player.getDuration().then(function (duration) {
//         player.on('pause', function () {
//             player.getCurrentTime().then(function (currentTime) {
//                 let time = (100 * currentTime) / duration;
//                 console.log(Math.round(time) + '  %');
//             });
//         });
//     });
// }
//
// function setCurrentTime(player, sec)
// {
//     player.setCurrentTime(sec);
// }

// let intervalId = setInterval(function () {
//     if(currentTime > duration)
//     {
//         clearInterval(intervalId);
//         videoProgress.value = 0;
//     } else {
//         videoProgress.value  = currentTime;
//     }
//     currentTime++;
//     console.log("Duration: " + duration + " " + "CurrentTime: " + currentTime);
// }, 1000)

// let intervalId;
//
// function videoProgress(player)
// {
//     const videoProgress = document.getElementById('videoProgress');
//
//     player.getDuration().then(function (duration) {
//         player.getCurrentTime().then(function (currentTime) {
//             videoProgress.max = Math.round(duration);
//             intervalId = setInterval(function () {
//                 if (Math.round(currentTime) > Math.round(duration)) {
//                     clearInterval(intervalId);
//                     videoProgress.value = 0;
//                 } else {
//                     videoProgress.value = Math.round(currentTime);
//                 }
//                 Math.round(currentTime++);
//                 console.log("Duration: " + duration + " " + "CurrentTime: " + currentTime);
//             },1000);
//         });
//     });
// }

$(document).ready(function () {
    const options = {
        id: 692943098,
        width: 640,
        height: 720,
        portrait: false,
        title: false,
        playsinline: false,
        byline: false,
        muted: true,
    }

    const player = new Player('vimeo', options);
    let xhr = new XMLHttpRequest();
    console.log(xhr.upload);
});