import "alpinejs";
import { registerUser } from "./services";

const errorSection = document.getElementById("error");
const errorSectionP = errorSection.querySelector("p");

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("focus", () => {
    // Add the hidden class to hide the error
    errorSection.classList.add("hidden");
  });
});

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const newUser = Object.fromEntries(new FormData(ev.target));

  registerUser(newUser)
    .then(({ user, error: sbError }) => {
      if (sbError) {
        throw Error(sbError.message);
      }
    })
    .catch((customError) => {
      errorSectionP.innerText = customError.message;

      // Remove 'hidden' class to show the error
      errorSection.classList.remove("hidden");
    });
});
