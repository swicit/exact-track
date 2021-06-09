import "alpinejs";

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const newRegistration = Object.fromEntries(new FormData(ev.target));
});
