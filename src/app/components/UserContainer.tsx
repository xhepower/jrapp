"use client";
import React, { FC, useEffect } from "react";
import { iUser } from "../utils/IData";

const addUser = () => {
  console.log("Agregar user");
};
function UserContainer({ users }: { users: iUser[] }) {
  useEffect(() => {
    return () => {};
  }, [users]);

  return (
    <div>
      <button onClick={addUser}>Agregar usuario</button>
      {users.map((user) => {
        return <p key={`user${user.id}`}>{user.id}</p>;
      })}
    </div>
  );
}

export default UserContainer;
