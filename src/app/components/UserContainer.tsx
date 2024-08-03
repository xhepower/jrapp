"use client";
import { FC, useEffect, useState } from "react";
import { iUser } from "../utils/IData";
import AddUser from "./AddUser";
import { revalidateTag } from "next/cache";
import { getUsers } from "../actions";
import User from "./User";

function UserContainer() {
  const [isAdding, setIsAdding] = useState(false);
  const [users, setUsers] = useState([]);
  const addUser = () => {
    const aja = !isAdding;
    setIsAdding(aja);
    console.log(isAdding);
  };
  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchUsers(); // Cargar usuarios cuando se monta el componente
  }, [isAdding]);

  return (
    <>
      {isAdding == false ? (
        <div>
          <h2>USUARIOS</h2>
          <button onClick={addUser}>Agregar usuario</button>
          {users.map((user: iUser) => {
            return <User user={user} key={`user${user.id}`}></User>;
          })}
        </div>
      ) : (
        <AddUser setIsAdding={setIsAdding}></AddUser>
      )}
    </>
  );
}

export default UserContainer;
