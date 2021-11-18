const gnbMenuBtn = document.querySelector(".gnb-menu-icon");
const dropdownMenu = document.querySelector(".dropdown-menu");

// dropdown toggle event
gnbMenuBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("is-active");
});

// when to resize  >= 768, remove dropdown-menu
window.addEventListener("resize", () => {
  if (
    dropdownMenu.classList.contains("is-active") &&
    window.innerWidth >= 768
  ) {
    dropdownMenu.classList.remove("is-active");
  }
});
