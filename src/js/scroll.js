// entire scroll event: scrollIntoView
const scrollBtns = document.querySelectorAll(
  ".aside-bar-right > button[data-id]"
);
const scrollDownBtn = document.querySelector(".scroll-btn");

const scrollIntoSection = (btn) => {
  const targetSection = document.querySelector(
    `section[data-id="${btn.dataset.id}"]`
  );

  targetSection && targetSection.scrollIntoView({ behavior: "smooth" });
};

scrollBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    scrollIntoSection(btn);
  })
);

scrollDownBtn.addEventListener("click", (event) => {
  scrollIntoSection(event.currentTarget);
});
