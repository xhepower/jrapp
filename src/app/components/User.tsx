import { iUser } from "../utils/IData";
interface iUserProps {
  user: iUser;
}
function User(props: iUserProps) {
  const user = props.user;
  const {id,name,email,role}=user
  return (<> <div id={`user${user.id}`}>
    <p>Nombre: {name}</p>
    <p>Email: {email}</p>
    <p>Rol: {role}</p>
  </div>
  <div><button>Eliminar</button>Editar<button></button></div>
  <div><button onClick={()=>{console.log(id)}}>Siguiente</button></div></>
   
  );
}

export default User;
