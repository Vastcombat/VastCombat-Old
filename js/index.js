function vastcombat(arg1) {
  if (arg1 == "onPageLoad") {
    document.getElementById("lobby-homepage-title").innerHTML = vastcombatConfig.documentObjectModel.lobbyTitle;
    document.getElementById("playButton").setAttribute("value", vastcombatConfig.documentObjectModel.playButtonText);
  } else if (arg1 == "closePopup") {
    document.getElementById("popup").style.display = "none";
    return "vastcombat.popup_closed";
  } else if (arg1 == "forbidden") {
    document.getElementById("lobby-homepage").innerHTML = "Nice try.";
    return "vastcombat.hostnameForbidden";
  } else {
    console.log("vastcombat(arg1): Parameter 'arg1' was provided invalid, input was: " + arg1);
  }
}
function sendConsoleMessages() {
  setInterval(function() {
    if (vastcombatConfig.startupConsoleLogsEnabled == true) {
      console.log("VASTCOMBAT.IO", vastcombatConfig.consoleLogStyles.large);
      console.log("WAIT, WAIT, WAIT!", vastcombatConfig.consoleLogStyles.larger);
      console.log("Please refrain from pasting ANYTHING here as the person might be trying to access your gameplay, and might harm you as well. So for your own good, just don't do that!", vastcombatConfig.consoleLogStyles.base);
    }
  }, vastcombatConfig.startupConsoleLogsRepeatInterval);
}
if ( window.location.hostname != vastcombatConfig.hostname.primary && window.location.hostname != vastcombatConfig.hostname.alias.replit && window.location.hostname != vastcombatConfig.hostname.alias.replit_long && window.location.hostname != vastcombatConfig.hostname.alias.replit_longid && window.location.hostname != vastcombatConfig.hostname.alias.netlify && window.location.hostname != vastcombatConfig.hostname.alias.testServer ) { 
  vastcombat("forbidden");
} else {
  sendConsoleLogs();
}