import { useState } from 'react';

function TaskModel() {
  const [task, setTask] = useState({
    title: '',
    totalHours: 0,
    hoursPerDay: [0, 0, 0, 0, 0, 0, 0],
    endDate: null,
  });

  function updateTask(field, value) {
    setTask((prevTask) => ({ ...prevTask, [field]: value }));
  }

  function calculateEndDate() {
    const { horasObjetivo, horasPorDia } = task;
    const remainingHours = horasObjetivo - horasPorDia.reduce((acc, val) => acc + val, 0);

    const today = new Date();
    const daysRemaining = Math.ceil(remainingHours / horasPorDia[today.getDay()]);
    const endDate = new Date(today.setDate(today.getDate() + daysRemaining));

    updateTask('endDate', endDate);
  }



  return { task, updateTask, calculateEndDate };
}

export default TaskModel;