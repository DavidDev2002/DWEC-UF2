import React from 'react';

function App() {
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

  return (
    <div>
      <h1>{day}</h1>
      {taskList}
    </div>
  );
}

export default App;
