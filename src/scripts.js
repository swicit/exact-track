import "alpinejs";

const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const newRegistration = Object.fromEntries(new FormData(ev.target));
});
