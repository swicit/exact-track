import client from "./client";

export const registerUser = async ({ email, password }) =>
  client.auth.signUp({
    email,
    password,
  });
