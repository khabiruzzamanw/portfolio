
themeChanger();
sendEmail();











function themeChanger() {

  const theme = document.getElementById("theme");
  let imgSrc = theme.src;

  theme.addEventListener("mouseover", () => {
    theme.style.cursor = "pointer";
  });

  theme.addEventListener("click", () => {
    let themeData = document.body.getAttribute("class");

    if (themeData === "dark") {
      document.body.setAttribute("class", "light");
      theme.src = "images/lightMode.svg";
    } else {
      document.body.setAttribute("class", "dark");
      theme.src = "images/darkMode.svg";
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

    emailjs.send("service_cpmtp1k", "template_85gsrz9", emailobj);
  });
};