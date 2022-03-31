var musicEmbed = document.querySelector("#musicPlay");

var musicControl = () => {
  var music = document.querySelector("#musicPlay");
  var iconPlay = document.querySelector("#iconPlay");

  if (music.muted) {
    music.muted = false;
    iconPlay.classList.replace("fa-pause", "fa-play");
  } else {
    music.muted = true;
    iconPlay.classList.replace("fa-play", "fa-pause");
  }
};
