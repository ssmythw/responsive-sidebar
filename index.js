let sidebar = document.getElementsByClassName("sidebar")[0];
let hamburger = document.getElementsByClassName("hamburger")[0];

hamburger.addEventListener("click", (e) => {
  sidebar.classList.toggle("transition");
});
