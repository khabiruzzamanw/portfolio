



const ImageIcons = {
  dark: {
    themeIcon: "M479.96-144Q340-144 242-242t-98-238q0-140 97.93-238t237.83-98q13.06 0 25.65 1 12.59 1 25.59 3-39 29-62 72t-23 92q0 85 58.5 143.5T648-446q49 0 92-23t72-62q2 13 3 25.59t1 25.65q0 139.9-98.04 237.83t-238 97.93Zm.04-72q82 0 148.78-47.07Q695.55-310.15 727-386q-20 5-39.67 8.5Q667.67-374 648-374q-113.86 0-193.93-80.07Q374-534.14 374-648q0-19.67 3.5-39.33Q381-707 386-727q-75.85 31.45-122.93 98.22Q216-562 216-480q0 110 77 187t187 77Zm-14-250Z",
    instagramIcon: "",
    twitterIcon: "",
    githubIcon: "",
    linkedinIcon: "",
    youtubeIcon: "",
    emailIcon: "",
    userIcon: "M237-285q54-38 115.5-56.5T480-360q66 0 127.5 18.5T723-285q35-41 52-91t17-104q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 54 17 104t52 91Zm141-165q-42-42-42-102t42-102q42-42 102-42t102 42q42 42 42 102t-42 102q-42 42-102 42t-102-42ZM480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm100-88.5q48-16.5 90-48.5-43-27-91-41t-99-14q-51 0-99.5 13.5T290-233q42 32 90 48.5T480-168q52 0 100-16.5ZM531-501q21-21 21-51t-21-51q-21-21-51-21t-51 21q-21 21-21 51t21 51q21 21 51 21t51-21Zm-51-51Zm0 319Z"
  },
  light: {
    themeIcon: "M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-221 51q-56-56-56-136t56-136q56-56 136-56t136 56q56 56 56 136t-56 136q-56 56-136 56t-136-56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Zm317-263Z",
    instagramIcon: "",
    twitterIcon: "",
    githubIcon: "",
    linkedinIcon: "",
    youtubeIcon: "",
    emailIcon: "",
    userIcon: "M237-285q54-38 115.5-56.5T480-360q66 0 127.5 18.5T723-285q35-41 52-91t17-104q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 54 17 104t52 91Zm141-165q-42-42-42-102t42-102q42-42 102-42t102 42q42 42 42 102t-42 102q-42 42-102 42t-102-42ZM480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm100-88.5q48-16.5 90-48.5-43-27-91-41t-99-14q-51 0-99.5 13.5T290-233q42 32 90 48.5T480-168q52 0 100-16.5ZM531-501q21-21 21-51t-21-51q-21-21-51-21t-51 21q-21 21-21 51t21 51q21 21 51 21t51-21Zm-51-51Zm0 319Z"
  }
};

themeChanger();
setLinks();




const avatarHolder = document.querySelector('.avatarHolder');

function setLinks() {

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

};




function themeChanger() {
  const theme = document.getElementById("theme");
  const themePath = document.querySelector(".theme path");

  const themeInfo = localStorage.getItem("userTheme") || "dark";
  setIcons(themeInfo);

  theme.addEventListener("click", () => {
    const darkThemed = document.body.classList.contains("dark");
    if (darkThemed) {
      setIcons("light");
    } else {
      setIcons("dark");
    }
  });


  function setIcons(themeKey) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(themeKey);
    themePath.setAttribute("d", ImageIcons[themeKey].themeIcon);
    localStorage.setItem("userTheme", themeKey);
  };

};




