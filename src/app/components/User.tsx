import { iUser } from "../utils/IData";
interface iUserProps {
  user: iUser;
}
function User(props: iUserProps) {
  const user = props.user;
  return (
    <div id={`user${user.id}`}>
      <details>
        <summary>
          <div>Aqui van ir todos los detalles</div>
        </summary>
        AQUI VAN LAS RUTAS
      </details>
    </div>
  );
}

export default User;
