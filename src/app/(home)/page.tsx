import { useEffect, useState } from "react";
import { getUsers } from "../actions";
import User from "../components/User";
import { iUser } from "../utils/IData";
import ItemContainer from "../components/UserContainer";
import UserContainer from "../components/UserContainer";
import { revalidateTag } from "next/cache";
async function Home() {
  const users = await getUsers();
  revalidateTag("collection");
  return (
    <section>
      <UserContainer></UserContainer>
    </section>
  );
}

export default Home;
