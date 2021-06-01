/*
const options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: true, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
*/

const btnDark = document.querySelector(".btn-dark");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const mainBody = document.getElementById("mainBody");

const currentTheme = localStorage.getItem("theme");  //get session theme from local storage
if (currentTheme == "dark") {
  mainBody.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  mainBody.classList.toggle("light-theme");
}

btnDark.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    mainBody.classList.toggle("light-theme");
    var theme = mainBody.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    mainBody.classList.toggle("dark-theme");
    var theme = mainBody.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});
