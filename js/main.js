const video = document.querySelector('.video__player');
let overlay = document.querySelector('.video-overlay');


video.addEventListener('play', () => {
    overlay.classList.add('video-overlay--playing');
})

video.addEventListener('pause', () => {
    overlay.classList.remove('video-overlay--playing');
})

