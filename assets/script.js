const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progressContainer');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const playImage = 'play.png'; 
const pauseImage = 'pause.png'; 

const songs = ['main2.mp3', 'main5.mp3', 'main3.mp3', 'main4.mp3', 'main2.mp3'];
let songIndex = 0;

function loadSong(song) {
    audio.src = song;
}

function playPauseSong() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.querySelector('img').src = pauseImage;
    } else {
        audio.pause();
        playPauseBtn.querySelector('img').src = playImage;
    }
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playPauseSong();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playPauseSong();
}

function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    currentTimeEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);
    durationEl.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
}

function setProgress(e) {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

playPauseBtn.addEventListener('click', playPauseSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);

// Initialize the play/pause button with the play image
playPauseBtn.querySelector('img').src = playImage;

// Load the first song initially
loadSong(songs[songIndex]);