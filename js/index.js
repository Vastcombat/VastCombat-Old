function vastcombat(arg1, arg2) {
  if (arg1 == "onPageLoad") {
    if (localStorage.vastcombat_playerName) {
      document.getElementById("playerNameInput").value = localStorage.vastcombat_playerName;
    } else {
      localStorage.vastcombat_playerName = "";
    }
    document.getElementById("lobby-homepage-title").innerHTML = vastcombatConfig.documentObjectModel.lobbyTitle;
    document.getElementById("playButton").setAttribute("value", vastcombatConfig.documentObjectModel.playButtonText);
    document.getElementById('logInformation1').innerHTML = vastcombatConfig.documentObjectModel.loadSuccessText;
    localStorage.setItem("vastcombat_experimentalMode", false);
    dev();
    return "vastcombat.callbackReached";
  } else if (arg1 == "closePopup") {
    document.getElementById("popup").style.display = "none";
    return "vastcombat.popup_closed";
  } else if (arg1 == "forbidden") {
    document.getElementById("lobby-homepage").innerHTML = "Nice try.";
    return "vastcombat.hostnameForbidden";
  } else {
    console.error("vastcombat(arg1): Parameter 'arg1' was provided invalid, input was: " + arg1);
  }
}
if ( window.location.hostname != vastcombatConfig.hostname.primary && window.location.hostname != vastcombatConfig.hostname.alias.replit && window.location.hostname != vastcombatConfig.hostname.alias.replit_long && window.location.hostname != vastcombatConfig.hostname.alias.replit_longid && window.location.hostname != vastcombatConfig.hostname.alias.netlify && window.location.hostname != vastcombatConfig.hostname.alias.netlifyBranch.main && window.location.hostname != vastcombatConfig.hostname.alias.testServer) { 
  vastcombat("forbidden");
}

setInterval(function() {
  if (vastcombatConfig.startupConsoleLogsEnabled == true) {
    console.log("%c VASTCOMBAT.IO", vastcombatConfig.consoleLogStyles.large);
    console.log("%c WAIT, WAIT, WAIT!", vastcombatConfig.consoleLogStyles.larger);
    console.log("%c Please refrain from pasting ANYTHING here as an attacker might be trying to harm you and/or the game! So for your own good, don't do anything like that!", vastcombatConfig.consoleLogStyles.default);
  }
}, vastcombatConfig.startupConsoleLogsRepeatInterval);

setTimeout(function() { document.getElementById('logInformation1').setAttribute("style", "display: none"); }, 1250);

function playerNameChange() {
  const playerNameInput = document.getElementById("playerNameInput");
  localStorage.setItem("vastcombat_playerName", playerNameInput.value);
}

function serverChange() {
  const serverUserInput = document.getElementById("serverPicker");
  localStorage.setItem("vastcombat_playerServer", serverUserInput.selectedIndex);
  playVastAudio("button_click");
}

function vastcombat_blur(elementID, rate) {
  document.getElementById(elementID).style.filter = "blur(" + rate + ")";
}

function fuzzyPlayerInfo() {
  document.getElementById("playerInfo").innerHTML = 'My name is <input type="text" id="playerNameInput" maxlength="16" placeholder="Pick a name!" title="Pick a nickname of your choice! Just make sure it doesn\'t exceed 16 characters." onchange="playerNameChange()" tabindex="1" autofocus accesskey="n" onkeypress="playVastAudio(\'key_press\')" style="height:16px"></input>I want to play in the \'<select id="serverPicker" onchange="serverChange()" tabindex="2" accesskey="s" title="Consider picking your nearest server if you don\'t want lag to be your shadow." style="height:69px"><option value="as">Asia</option><option value="eu">Europe</option><option value="na">North America</option></select>\' server. So let us now <input type="submit" id="playButton" value="Play" tabindex="3" accesskey="p"></input>!';
}