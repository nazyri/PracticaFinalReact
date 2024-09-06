import "../style/register.css";
import { post } from "../services/fetch";

function RegisterForm() {
  const []
  return (
    <div className="register">
        <img className="img-register" src="/src/img/imagen-register.webp" alt="" />
      <div className="container-register">
      <form className="form">
        <h2 className="Titulo-register">Register</h2>
        <p>Usuario</p>
        <input type="text" placeholder="Nombre de usuario" value={nombre












        }/>
        <p>Correo</p>
        <input type="email" placeholder="Correo" />
        <p>Clave</p>
        <input type="password" placeholder="Clave" />
        <br /><br />
        <button className="btn-register">Register</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
