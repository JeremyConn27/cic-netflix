let vid = document.getElementById("featured-video"); 
let playPauseButton = document.getElementById("play-pause-button");
let navMenuIcon = document.getElementById("nav-menu-icon");
let navMenu = document.getElementById("nav-menu");


playPauseButton.classList.add("pause-video");
function playPauseVideo() { 
    if (vid.paused == true) {
        vid.play(); 
        playPauseButton.classList.remove("play-video");
        playPauseButton.classList.add("pause-video");
    } else {
        vid.pause(); 
        playPauseButton.classList.remove("pause-video");
        playPauseButton.classList.add("play-video");
    }
}

function toggleNav() {
    navMenuIcon.classList.toggle("open-menu");
    navMenu.classList.toggle("open-menu");
}