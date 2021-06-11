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
const body = document.querySelector("body");

const currentTheme = localStorage.getItem("theme");  //get session theme from local storage
if (currentTheme == "dark") {
  body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  body.classList.toggle("light-theme");
}

btnDark.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    body.classList.toggle("light-theme");
    var theme = body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    body.classList.toggle("dark-theme");
    var theme = body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});
