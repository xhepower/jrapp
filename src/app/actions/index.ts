"use server";

import { iUser, iSaveUser } from "../utils/IData";

export const getUsers = async () => {
  const data = await fetch("http://localhost:6969/api/users");
  return data.json();
};
export const saveUser = async (user: iSaveUser) => {
  const { email, name, role, password } = user;
  const data = await fetch("http://localhost:6969/api/users", {
    method: "POST", // Método HTTP
    headers: {
      "Content-Type": "application/json", // Tipo de contenido de los datos
    },
    body: JSON.stringify(user),
    next: { tags: ["collection"] }, // Cuerpo de la solicitud en formato JSON});
  });
};
