document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("theme-switch");
    const body = document.body;
  
    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeSwitch.checked = true;
    }
  
    themeSwitch.addEventListener("change", function () {
      if (this.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
    });
  });
  