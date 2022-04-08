// Custom Popup Function
function vastcombat_createPopup(title, description, buttonEnabled, buttonText, actionOnClick, showOnCreation) {
  document.getElementsByClassName("popup-heading")[0].innerHTML = title;
  document.getElementsByClassName("popup-description")[0].innerHTML = description;
  if (buttonEnabled == true || buttonEnabled == "true") {
    document.getElementsByClassName("popup-button")[0].style.display = "inline-block";
    document.getElementsByClassName("popup-button")[0].innerHTML = buttonText; 
  }
  if (buttonEnabled == false || buttonEnabled == "false") {
    document.getElementsByClassName("popup-button")[0].style.display = "none";
  }
  if (showOnCreation == true || showOnCreation == "true") {
    document.getElementById("popup").style.display = "block";
    document.getElementById("dark-wrapper").style.display = "block";
  }
  if (actionOnClick == "reload") {
    document.getElementsByClassName("popup-button")[0].setAttribute("onclick", "window.location.reload()");
  } else if (actionOnClick == "closePopup") {
    document.getElementsByClassName("popup-button")[0].setAttribute("onclick", 'document.getElementById("popup").style.display = "none"; document.getElementById("dark-wrapper").style.display = "none"');
  }
  return "vastcombat.popup_created";
}