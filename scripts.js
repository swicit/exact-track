const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

document.querySelectorAll(".button--text").forEach((button) =>
  button.addEventListener("click", (event) => {
    console.log();

    // TODO: Based on the button text,
    // hide and show the relevant form fields.
    switch (event.target.innerText) {
      case "Already Have an Account?":
        Array.from(inputs)
          .slice(0, inputs.length - 2)
          .forEach((input) => {
            input.classList.add("is-hidden");
          });

        break;

      case "Forgot Password":
        Array.from(inputs)
          .slice(0, inputs.length - 1)
          .forEach((input) => {
            input.classList.add("is-hidden");
          });
        break;

      case "Need To Register?":
        break;
      default:
        console.log("hi");
    }
  })
);

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  /**
   * FormData uses the `name` attributes from the `inputs` and
   * pairs those with the `value`s.
   *
   * From that, we can create a new object.
   *
   * https://dev.to/codefinity/handling-form-submissions-ii-35d5
   */
  const newRegistration = Object.fromEntries(new FormData(ev.target));
});
