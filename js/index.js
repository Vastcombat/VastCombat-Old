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
if ( window.location.hostname != vastcombatConfig.hostname.primary && window.location.hostname != vastcombatConfig.hostname.alias.replit && window.location.hostname != vastcombatConfig.hostname.alias.replit_long && window.location.hostname != vastcombatConfig.hostname.alias.replit_longid && window.location.hostname != vastcombatConfig.hostname.alias.netlify && window.location.hostname != vastcombatConfig.hostname.alias.testServer ) { 
  vastcombat("forbidden");
}
setInterval(function() {
  if (vastcombatConfig.startupConsoleLogsEnabled == true) {
    console.log("%c VASTCOMBAT.IO", vastcombatConfig.consoleLogStyles.large);
    console.log("%c WAIT, WAIT, WAIT!", vastcombatConfig.consoleLogStyles.larger);
    console.log("%c Please refrain from pasting ANYTHING here as an attacker might be trying to harm you and/or the game! So for your own good, don't do anything like that!", vastcombatConfig.consoleLogStyles.default);
  }
}, vastcombatConfig.startupConsoleLogsRepeatInterval);

document.getElementById('logInformation1').innerHTML = vastcombatConfig.documentObjectModel.loadSuccessText;
setTimeout(function() { document.getElementById('logInformation1').style.display = "none" }, 5000);