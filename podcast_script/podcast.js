// js for player
let play = document.querySelector(".player-btn");
let music = document.querySelector(".audio-clips");
isPlaying = false;

let playFunction = () => {
  isPlaying = true;
  play.classList.replace("fa-play", "fa-pause");
  music.play();
};
let pauseFunction = () => {
  isPlaying = false;
  play.classList.replace("fa-pause", "fa-play");
  music.pause();
};

play.addEventListener("click", () => {
  if (isPlaying == false) {
    playFunction();
  } else {
    pauseFunction();
  }
});

// podcast library js
let podcast = document.querySelectorAll(".podcast");
let podcast__playBtn = document.querySelectorAll(".podcast-play");
podcast__playBtn.forEach((elm) => {
  elm.addEventListener("click", () => {
    let music_id = elm.getAttribute("data-show");
    let podcast_music = document.getElementById(music_id);
    if (isPlaying == false) {
      isPlaying = true;
      podcast_music.play();
      elm.classList.replace("fa-play","fa-pause");
    } else {
      isPlaying = false;
      podcast_music.pause();
      elm.classList.replace("fa-pause", "fa-play");
    }
  });
});

// load more js for podcast tab
let more__podcast = document.querySelector(".more__podcast");
let more__podcast_btn = document.querySelector(".more__podcast-btn");
let loadAnimation = document.querySelector(".loading-podcast");
more__podcast_btn.addEventListener("click", () => {
  if (more__podcast_btn.innerText == "Show less") {
    more__podcast_btn.innerText = "More Podcasts";
    more__podcast.classList.remove("active");
    loadAnimation.style.display = "none";
  } else {
    loadAnimation.style.display = "block";
    setTimeout(morePodcast, 3000);
  }
});

function morePodcast() {
  if (more__podcast_btn.innerText == "More Podcasts") {
    more__podcast_btn.innerText = "Show less";
    loadAnimation.style.display = "none";
    more__podcast.classList.add("active");
  }
}
