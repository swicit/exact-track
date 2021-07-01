import { errorSection, errorSectionP } from "./elements";

export default (message) => {
  errorSectionP.innerText = customError.message;

  // Remove 'hidden' class to show the error
  errorSection.classList.remove("hidden");
};
