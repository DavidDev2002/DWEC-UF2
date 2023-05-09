import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [objetivos, setObjetivos] = useState([]);
  const day = new Date().toLocaleDateString();
  
  const activeTasks = [
    { id: 1, name: 'Tarea 1'},
    { id: 2, name: 'Tarea 2'},
    { id: 3, name: 'Tarea 3'}
  ];
  
  const taskList = activeTasks.map(task => (
    <div key={task.id}>
      <p>{`${task.name}: ${task.percentage}%`}</p>
    </div>
  ));

  

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
            alert("Quedan menos de 3 dias para acabar alguna tarea.");
          }
        } 
    }

  return (
    <div onLoad={comprobarFechaFinal}>
      <h1>Dia de hoy: {day}</h1>
      <button onClick={comprobarFechaFinal}>Comprobar si tienes Tareas cerca de terminar</button>
    </div>
  );
}

export default App;
