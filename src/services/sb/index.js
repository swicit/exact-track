import client from "./client";

export const registerUser = ({ email, password }) => {
  console.log(email, password, "signup");
  return client.auth.signUp(email, password);
};
