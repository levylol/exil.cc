// Function to skip the audio by 10 seconds
function skipAudio() {
    const audio = document.getElementById('audioPlayer');
    audio.currentTime += 10; // Skip forward 10 seconds
}

// Function to mute/unmute the audio
function muteAudio() {
    const audio = document.getElementById('audioPlayer');
    audio.muted = !audio.muted; // Toggle mute
}

// Function to skip the video by 10 seconds
function skipVideo() {
    const video = document.getElementById('videoPlayer');
    video.currentTime += 10; // Skip forward 10 seconds
}

// Function to mute/unmute the video
function muteVideo() {
    const video = document.getElementById('videoPlayer');
    video.muted = !video.muted; // Toggle mute
}