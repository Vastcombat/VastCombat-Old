const experimentalEnabled = true;

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
}
if (localStorage.getItem("vastcombat_experimentalMode") == true) {
  console.log("Experimental time!");
}
