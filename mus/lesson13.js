const pride = new Audio("PRIDE.mp3");
const yoasobi = new Audio("YOASOBI.mp3");
const rr = new Audio("NGGYU.mp3");

let songPlaying = false;

function playPride() {
  if (songPlaying === false) {
    pride.play();
    document.querySelector(
      "#image"
    ).innerHTML = `<img src="https://i.scdn.co/image/ab67616d0000b2737c0b9f5652525ddcb726de07" id="one">`;
    songPlaying = true;
  }
}
function pausePride() {
  if (songPlaying === true) {
    pride.pause();
    songPlaying = false;
  }
}
function stopPride() {
  pride.load();
  document.querySelector("#image").innerHTML = ``;
  songPlaying = false;
}

function playYoasobi() {
  if (songPlaying === false) {
    yoasobi.play();
    document.querySelector(
      "#image"
    ).innerHTML = `<img src="https://i.ytimg.com/vi/AQmTEyg7BTM/maxresdefault.jpg" id="two">`;
    songPlaying = true;
  }
}
function pauseYoasobi() {
  if (songPlaying === true) {
    yoasobi.pause();
    songPlaying = false;
  }
}
function stopYoasobi() {
  yoasobi.load();
  document.querySelector("#image").innerHTML = ``;
  songPlaying = false;
}

function playRR() {
  if (songPlaying === false) {
    rr.play();
    document.querySelector(
      "#image"
    ).innerHTML = `<img src="https://media.tenor.com/_4YgA77ExHEAAAAd/rick-roll.gif" id="three">`;
    songPlaying = true;
  }
}
function pauseRR() {
  if (songPlaying === true) {
    rr.pause();
    songPlaying = false;
  }
}
function stopRR() {
  rr.load();
  document.querySelector("#image").innerHTML = ``;
  songPlaying = false;
}
