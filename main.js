const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  const navOpened = navToggle.getAttribute("aria-expanded");
  if (navOpened === "false") {
    // !navOpened doesn't work, attribute true/false is a string, not a boolean
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }
  console.log(navOpened);
});
