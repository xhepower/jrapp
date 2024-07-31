import { useEffect, useState } from "react";
import { getUsers } from "../actions";
import User from "../components/User";
import { iUser } from "../utils/IData";
import ItemContainer from "../components/UserContainer";
import UserContainer from "../components/UserContainer";

async function Home() {
  const users = await getUsers();

  return (
    <section>
      <UserContainer users={users}></UserContainer>
    </section>
  );
}

export default Home;
