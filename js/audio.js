const vastAudio = {
  musicVolume: 50,

  lobby: document.getElementById("vastAudio-lobby"),
  input: {
    onkeypress: document.getElementById("vastAudio-key_press")
  },
  button: {
    click: document.getElementById("vastAudio-button_click")
  }
}

function playVastAudio(filename) {
  if (filename == "lobby") {
    document.getElementById("vastAudio-lobby").play();
    document.getElementById("vastAudio-lobby").currentTime = 0;
  } else if (filename == "button_click") {
    document.getElementById("vastAudio-button_click").play();
    document.getElementById("vastAudio-button_click").currentTime = 0;
  } else if (filename == "key_press") {
    document.getElementById("vastAudio-key_press").play();
    document.getElementById("vastAudio-key_press").currentTime = 0;
  } else {
    console.error("Could not find the vastaudio.");
  }
}

function vastAudio_updateMusicVolume() {
  localStorage.setItem("vastaudio_musicVolume", vastAudio.musicVolume);
  document.getElementById("vastAudio-lobby").volume = localStorage.getItem("vastaudio_musicVolume") / 100;
}

document.onload = function() {
  playVastAudio("lobby");
  document.getElementById("vastAudio-lobby").volume = localStorage.getItem("vastaudio_musicVolume") / 100;
};