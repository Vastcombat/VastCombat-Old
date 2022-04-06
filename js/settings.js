function vastcombat_settingsMenu(arg1, arg2) {
  if (arg1 == "open") {

    document.getElementById("settingsButton").style.display = "none";
    document.getElementById("settings").style.display = "block";

  } else if (arg1 == "close") {

    document.getElementById("settings").style.display = "none";
    document.getElementById("settingsButton").style.display = "block";

  } else {

    console.error("vastcombat_settingsMenu(arg1, arg2): Parameter 'arg1' was provided invalid, input was: " + arg1);

  }
  return "vastcombat.settingsMenuCallbackReceived";
}