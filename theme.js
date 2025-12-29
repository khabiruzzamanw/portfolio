const theme = document.getElementById("theme");
let imgSrc = theme.src;

theme.addEventListener("mouseover", () => {
  theme.style.cursor = "pointer";
});

theme.addEventListener("click", () => {
  // document.body.classList.toggle("lightMode");
  let themeData = document.body.getAttribute("class");

  if (themeData === "dark") {
    // document.body.removeAttribute("class", "dark");
    document.body.setAttribute("class", "light");
    theme.src = "/images/lightMode.svg";
  } else {
    document.body.setAttribute("class", "dark");
    theme.src = "/images/darkMode.svg";
  }

  console.log(document.body.classList);
});
