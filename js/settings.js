function vastcombat_settingsMenu(arg1, arg2) {
  if (arg1 == "open") {

    document.getElementById("settingsButton").style.display = "none";
    document.getElementById("settings").style.display = "block";
    playVastAudio('button_click');

  } else if (arg1 == "close") {

    document.getElementById("settings").style.display = "none";
    document.getElementById("settingsButton").style.display = "block";
    playVastAudio('button_click');

  } else {

    console.error("vastcombat_settingsMenu(arg1, arg2): Parameter 'arg1' was provided invalid, input was: " + arg1);

  }
  return "vastcombat.settingsMenuCallbackReceived";
}
var fullScreenElem = document.documentElement;
var isFullScreen = false;

function vastcombat_toggleFullscreen() {
  playVastAudio('button_click');
  if (isFullScreen == false) {
    if (fullScreenElem.requestFullscreen) {
      fullScreenElem.requestFullscreen();
      isFullScreen = true;
    } else if (fullScreenElem.webkitRequestFullscreen) { /* Safari */
      fullScreenElem.webkitRequestFullscreen();
      isFullScreen = true;
    } else if (fullScreenElem.msRequestFullscreen) { /* IE11 */
      fullScreenElem.msRequestFullscreen();
      isFullScreen = true;
    }
    isFullScreen = true;
  } else if (isFullScreen == true) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    isFullScreen = false;
  } else {
    console.error("Variable \"isFullScreen\" carries a value which is not a boolean.");
  }
}

function vastcombat_openFullscreen() {
  if (fullScreenElem.requestFullscreen) {
    fullScreenElem.requestFullscreen();
    isFullScreen = true;
  } else if (fullScreenElem.webkitRequestFullscreen) { /* Safari */
    fullScreenElem.webkitRequestFullscreen();
    isFullScreen = true;
  } else if (fullScreenElem.msRequestFullscreen) { /* IE11 */
    fullScreenElem.msRequestFullscreen();
    isFullScreen = true;
  }
}

function vastcombat_closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}