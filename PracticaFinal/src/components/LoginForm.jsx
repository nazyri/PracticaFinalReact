import { useRef, useState } from "react";
import { useNavigate, useRef, useEffect } from "react-router-dom";
import { get } from "../services/fetch";

function LoginForm() {

    const nav = useNavigate();
    const [useData, setUseData]= useState([])
    const [codigo, setCodigo]= useState("");
    const [nombre, setNombre]= useState("");
    const [email, setEmail] = useState("");
    const [clave, setClave] = useState("");

    const codigoRef = useRef();
    const nombreRef = useRef();
    const emailRef = useRef();
    const claveRef = useRef();

    const vacios = () => {
        const correoTrim = correoRef.current.value.trim();
        const claveTrim = claveRef.current.value.trim();
    
        if (!correoTrim || !claveTrim) {
          alert("Por favor complete todos los campos.");
          return;
        }
        // Llama a la función para autenticar al usuario
        const valida=useData.find(user=>user.correo === correo && user.clave === clave)
        authenticate(valida)
      };

    const authenticate = async (validar) => {
        try {
            if(validar){
              nav("/Home")
              return
            }else{
            alert("Ocurrió un error. Inténtelo más tarde.");
            }
          } catch (error) {
            console.error("Error de autenticación:", error);
            alert("Ocurrió un error. Inténtelo más tarde.");
          }
        };

        useEffect (()=>{
            const usarGet =async ()=>{
            const data = await get("users")
               setUseData(data)
           }
           console.log(useData);
           usarGet()
           },[])
    
  return (
    <div>
      <h1>Login</h1>
            <input type="text" id="codigo" placeholder="Ingrese su codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)}/>
            <input type="text" id="nombre" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            <input type="email" id="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" id="clave" placeholder="Ingrese su clave" value={clave} onChange={(e) => setClave(e.target.value)}/>
            <button>Iniciar Sesion</button>
    </div>
  )
}

export default LoginForm
