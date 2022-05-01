const experimentalEnabled = false;
const isSiteRestricted = false;

function dev() {
  if (window.location.hostname == vastcombatConfig.hostname.alias.testServer) {
    if (experimentalEnabled == true) {
      localStorage.setItem("vastcombat_experimentalMode", true);
    } else {
      localStorage.setItem("vastcombat_experimentalMode", false);
    }
  } else {
    localStorage.setItem("vastcombat_experimentalMode", false);
  }

  if (isSiteRestricted == true && localStorage.getItem("vastcombat_devControls") != "enabled") {
    document.getElementById("lobby-homepage").innerHTML = "Site is locked for players, for now...";
    location.replace("https://vastcombat.cf/locked.html");
  }
}
if (localStorage.getItem("vastcombat_experimentalMode") == true) {
  console.log("Experimental time!");
}