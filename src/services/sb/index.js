import client from "./client";

export const registerUser = (newUser) => {
  return client.auth.signUp(newUser);
};
