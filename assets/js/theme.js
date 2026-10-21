/* Light/dark toggle. The initial theme is set inline in <head> to avoid a flash;
   the choice is stored under "theme", shared with the homepage. */
(function () {
  "use strict";
  var html = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  if (!button) return;
  var icon = button.querySelector("i");

  function sync() {
    var dark = html.getAttribute("data-theme") === "dark";
    icon.className = dark ? "fa-solid fa-moon" : "fa-solid fa-sun";
  }

  button.addEventListener("click", function () {
    var dark = html.getAttribute("data-theme") !== "dark";
    if (dark) html.setAttribute("data-theme", "dark");
    else html.removeAttribute("data-theme");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
    sync();
  });

  sync();
})();
