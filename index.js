


//this section is for the theme changer

const theme = document.getElementById("theme");

theme.addEventListener("mouseover", () => {
  theme.style.cursor = "pointer";
});

theme.addEventListener("click", () => {
  // document.body.classList.toggle("lightMode");
  let themeData = document.body.classList;

  if (themeData.contains('dark')) {
    // document.body.removeAttribute("class", "dark");
    themeData.replace('dark','light');
    theme.src = "images/lightMode.svg";

  } else {
    themeData.replace('light','dark');
    theme.src = "images/darkMode.svg";
  }

  console.log(document.body.classList);
});


//-----------------------------------------------------------//---------------------------------------------------------------//
