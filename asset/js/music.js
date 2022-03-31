var musicEmbed = document.querySelector("#musicPlay");
musicEmbed.play();

if (musicEmbed !== undefined) {
  musicEmbed
    .then(() => {
      // Start whatever you need to do only after playback
      // has begun.
    })
    .catch((error) => {
      if (error.name === "NotAllowedError") {
        showPlayButton(musicEmbed);
      } else {
        // Handle a load or playback error
      }
    });
}


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
