function getTheme() {
    if(window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  }
  const preferredScheme = getTheme();
  window.alert(preferredScheme);
  const thedarkside = document.querySelectorAll(".dark");
  const thelightside = document.querySelectorAll(".light");
  const thePage = document.getElementById("thePage");

function theForce(scheme = preferredScheme) {
      
      let darkOrLight = document.getElementsByClassName("light");
      console.log("Is it dark? "+ darkOrLight[0].style.display);

      if(scheme == "dark"){
          thePage.classList.add("alldark");
          thedarkside.forEach(acolyte => {
              //console.log(acolyte);
              acolyte.style.display = "flex";
          });
          thelightside.forEach(padwan => {
              //console.log(padwan);
              padwan.style.display = "none";
          });
      }
      else {      
          thePage.classList.remove("alldark");
          thedarkside.forEach(acolyte => {
              //console.log(acolyte);
              acolyte.style.display = "none";
          });
          thelightside.forEach(padwan => {
              //console.log(padwan);
              padwan.style.display = "flex";
          });
          }
}

theForce();   