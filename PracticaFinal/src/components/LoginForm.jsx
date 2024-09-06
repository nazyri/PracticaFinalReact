import { useRef, useState } from "react";
import {useNavigate, useEffect} from "react";
import { get } from "../services/fetch";
import Swal from 'sweetalert2';

function LoginForm() {

    const nav = useNavigate
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
        const codigoTrim = codigoRef.current.value.trim();
        const nombreTrim = nombreRef.current.value.trim();
        const emailTrim = emailRef.current.value.trim();
        const claveTrim = claveRef.current.value.trim();
    
        if (!codigoTrim || !nombreTrim || !emailTrim || !claveTrim) {
            Swal.fire({
                icon: 'error',
                title: 'Campos vacíos',
                text: 'Por favor, completa todos los campos.',
              });
          return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Formulario enviado',
            text: 'Gracias por completar el formulario.',
          });

        // Llama a la función para autentificar al usuario
        const validar=useData.find(user=>user.codigo === codigo && user.nombre === nombre && user.email === email && user.clave === clave)
        authenticate(validar)
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
           },[useData])
    
  return (
    <div>
      <h1>Login</h1>
            <input type="text" id="codigo" placeholder="Ingrese su codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)}/>
            <input type="text" id="nombre" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            <input type="email" id="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" id="clave" placeholder="Ingrese su clave" value={clave} onChange={(e) => setClave(e.target.value)}/>
            <button onClick={vacios}>Iniciar Sesion</button>
    </div>
  )
}

export default LoginForm
