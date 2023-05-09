import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Extra() {
    const [objetivos, setObjetivos] = useState([]);

    useEffect(() => {
        const objetivos = Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)));
        setObjetivos(objetivos);
    }, []);

    function comprobarFechaFinal() {
        const fechaHoy = new Date();
        const fechasFinales = [];

        for (let i = 0; i < localStorage.length; i++) {
          const valor = JSON.parse(localStorage.getItem(localStorage.key(i)));
          if (valor.fechaFinalizacion) {
            fechasFinales.push(valor.fechaFinalizacion);
          }
        }

        console.log(fechasFinales);
      
        for(let j = 0; j < fechasFinales.length; j++){
            const fecha = new Date(fechasFinales[j]);
            console.log(fecha);
          if((fecha.getTime() - fechaHoy.getTime()) < 259200000){
            alert("Quedan menos de 3 dias para acabar la tarea");
          }
        } 
    }



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
                        <span></span>
                        <button  onClick={comprobarFechaFinal}>Eskeler</button>
                    </li>

                ))}
            </ul>

        </div>
    );
}

export default Extra;
