import "alpinejs";
import { registerUser } from "./services";
import { errorSection, errorSectionP } from "./services/elements";

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
      // TODO: Move error message handling to a service
      // handleError(customError.message);
      errorSectionP.innerText = customError.message;

      // Remove 'hidden' class to show the error
      errorSection.classList.remove("hidden");
    });
});
