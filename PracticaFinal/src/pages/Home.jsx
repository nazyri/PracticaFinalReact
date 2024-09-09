import { useState } from "react";
// import { useNavigate } from "react";

 function Home() {
    // const navigate = useNavigate;
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

  return (
    <div>
      <input type="text" placeholder='Ingrese su Titulo' value={titulo} onChange={(e) => setTitulo (e.target.value)}/>
      <input type="text" placeholder='Ingrse su descripcion' value={descripcion} onChange={(e) => setDescripcion (e.target.value)}/>
      <input type="date" value={date} onChange={(e) => setDate (e.target.value)}/>
      <input type="time" value={time} onChange={(e) => setTime (e.target.value)}/>
      <button type="sumit">Agregar</button>
    </div>
  )
}

export default Home;
