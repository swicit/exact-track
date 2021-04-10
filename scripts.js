document.querySelector("form").addEventListener("submit", (ev) => {
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
