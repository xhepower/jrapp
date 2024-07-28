"use server";
export const getUsers = async () => {
  const data = await fetch("http://localhost:6969/api/users");
  return data.json();
};
