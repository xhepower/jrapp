import { useEffect, useState } from "react";
import { getUsers } from "../actions";
import User from "../components/User";
import { iUser } from "../utils/IData";

async function Home() {
  const users = await getUsers();

  return (
    <section>
      {users.map((user: iUser) => {
        return <User user={user} key={`user${user.id}`}></User>;
      })}
    </section>
  );
}

export default Home;
