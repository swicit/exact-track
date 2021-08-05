import "alpinejs";
import { registerUser } from "./services/sb/";

document.querySelector("form").addEventListener("submit", async (ev) => {
  ev.preventDefault();

  // Gather data from form
  const newUser = Object.fromEntries(new FormData(ev.target));

  // Register user
  const resp = await registerUser(newUser);
  console.log(resp);
});
