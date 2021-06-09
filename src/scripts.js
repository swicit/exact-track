import "alpinejs";
import { registerUser } from "./services";

console.log(registerUser);

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const newRegistration = Object.fromEntries(new FormData(ev.target));
});
