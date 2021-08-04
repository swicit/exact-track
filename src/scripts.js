import "alpinejs";
import fb from "./services/fb";

const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const newRegistration = Object.fromEntries(new FormData(ev.target));
  console.log(
    fb.auth.createUserWithEmailAndPassword(
      newRegistration.email,
      newRegistration.password
    )
  );
});
