themeChanger();








function themeChanger() {

  const theme = document.getElementById("theme");

  document.body.classList.add(localStorage.getItem("userTheme")) || "dark";
  theme.src = localStorage.getItem("themeImg") || "images/darkMode.svg";

  theme.addEventListener("click", () => {
    let themeData = document.body.classList;

    if (themeData.contains("dark")) {

      themeData.replace("dark", "light");
      theme.src = "images/lightMode.svg";
      localStorage.setItem("userTheme", "light");
      localStorage.setItem("themeImg", "images/lightMode.svg");

    } else {

      themeData.replace("light", "dark");
      theme.src = "images/darkMode.svg";
      localStorage.setItem("userTheme", "dark");
      localStorage.setItem("themeImg", "images/darkMode.svg");

    }

  });

};












//this section is for the theme changer

// const theme = document.getElementById("theme");

// theme.addEventListener("mouseover", () => {
//   theme.style.cursor = "pointer";
// });

// theme.addEventListener("click", () => {
//   let themeData = document.body.classList;

//   if (themeData.contains('dark')) {
//     themeData.replace('dark', 'light');
//     theme.src = "images/lightMode.svg";

//   } else {
//     themeData.replace('light', 'dark');
//     theme.src = "images/darkMode.svg";
//   }

//   console.log(document.body.classList);
// });


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


const githubStreamRepo = document.querySelector("#githubStreamRepo");

githubStreamRepo.href = "https://github.com/khabiruzzamanw/stream";








const stream = document.querySelector("#stream");

stream.href = "https://khabiruzzamanw.github.io/stream";


function themeChanger() {

  const theme = document.getElementById("theme");

  document.body.classList.add(localStorage.getItem("userTheme")) || "dark";
  theme.src = localStorage.getItem("themeImg") || "images/darkMode.svg";

  theme.addEventListener("click", () => {
    let themeData = document.body.classList;

    if (themeData.contains("dark")) {

      themeData.replace("dark", "light");
      theme.src = "images/lightMode.svg";
      localStorage.setItem("userTheme", "light");
      localStorage.setItem("themeImg", "images/lightMode.svg");

    } else {

      themeData.replace("light", "dark");
      theme.src = "images/darkMode.svg";
      localStorage.setItem("userTheme", "dark");
      localStorage.setItem("themeImg", "images/darkMode.svg");

    }

  });

};




function sendEmail() {

  (function () {
    emailjs.init("IQt8_0tK08kcpLSvW");
  })();

  const leaveEmail = document.getElementById("leaveEmail");
  const leaveMessage = document.getElementById("leaveMessage");
  const messageSendButton = document.getElementById("messageSendButton");

  messageSendButton.addEventListener('click', () => {

    let emailobj = {
      email: leaveEmail.value,
      message: leaveMessage.value
    };

    leaveEmail.value = '';
    leaveMessage.value = '';

    emailjs.send("service_cpmtp1k", "template_85gsrz9", emailobj);
  });
};