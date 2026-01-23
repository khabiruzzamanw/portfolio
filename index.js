


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
    themeData.replace('dark', 'light');
    theme.src = "images/lightMode.svg";

  } else {
    themeData.replace('light', 'dark');
    theme.src = "images/darkMode.svg";
  }

  console.log(document.body.classList);
});


//-----------------------------------------------------------//---------------------------------------------------------------//


//===========================================================this section is for links==========================================================================

const github = document.querySelector('#github');

github.href = "https://github.com/khabiruzzaman-codes";

const linkedin = document.querySelector('#linkedin');

linkedin.href = "https://www.linkedin.com/in/khabiruzzaman-codes";

const twitter = document.querySelector('#twitter');

twitter.href = "https://x.com/khabiruzzaman_c";

const instagram = document.querySelector('#instagram');

instagram.href = "https://www.instagram.com/khabiruzzaman.codes";

const youtube = document.querySelector('#youtube');

youtube.href = "https://www.youtube.com/@khabiruzzaman.codes";

const email = document.querySelector('#email');

email.href = "khabiruzzaman.codes@gmail.com";



const githubWeatherCheckerRepo = document.querySelector("#githubWeatherCheckerRepo");

githubWeatherCheckerRepo.href = "https://github.com/khabiruzzamanw/weatherChecker";


const githubJournixRepo = document.querySelector("#githubJournixRepo");

githubJournixRepo.href = "https://github.com/khabiruzzamanw/journix";


const githubGuessTheNumberRepo = document.querySelector("#githubGuessTheNumberRepo");

githubGuessTheNumberRepo.href = "";




const weatherChecker = document.querySelector("#weatherChecker");

weatherChecker.href = "https://khabiruzzamanw.github.io/weatherChecker";


const journix = document.querySelector("#journix");

journix.href = "https://khabiruzzamanw.github.io/journix";


const guessTheNumber = document.querySelector("#guessTheNumber");

guessTheNumber.href = "";


//---------------------------------------------------------------//
