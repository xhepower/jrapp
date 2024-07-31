"use server";

import { iUser } from "../utils/IData";

export const getUsers = async () => {
  const data = await fetch("http://localhost:6969/api/users");
  return data.json();
};
export const saveUser = async (user: iUser) => {
  const { email, name, role, password } = user;
};
