
themeChanger();
sendEmail();










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