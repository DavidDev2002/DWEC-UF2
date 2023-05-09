import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ObjectiveList() {
  const [objetivos, setObjetivos] = useState([]);

  useEffect(() => {
    const objetivos = Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)));
    setObjetivos(objetivos);
  }, []);

  return (
    <div>
      <h2>Lista de objetivos</h2>
      <ul>
        {objetivos.map((objetivo) => (
          <li key={objetivo.id}>
            <Link to={`/objetivos/${objetivo.id}`}>{objetivo.nombre}</Link>
            <br></br>
            <span> Fecha inicio: {objetivo.fechaInicio}</span>
            <br></br>
            <span> Fecha Final: {objetivo.fechaFinalizacion}</span>
          </li>
          
        ))}
      </ul>

    </div>
  );
}

export default ObjectiveList;
