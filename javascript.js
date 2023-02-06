const horas_dia = 24;

function store(){
    var monday = document.getElementById("lunes");
    localStorage.setItem("horas_lunes", monday.value);

    var tuesday = document.getElementById("martes");
    localStorage.setItem("horas_martes", tuesday.value);

    var wednesday = document.getElementById("miercoles");
    localStorage.setItem("horas_miercoles", wednesday.value);

    var thursday = document.getElementById("jueves");
    localStorage.setItem("horas_jueves", thursday.value);

    var friday = document.getElementById("viernes");
    localStorage.setItem("horas_viernes", friday.value);

    var saturday = document.getElementById("sabado");
    localStorage.setItem("horas_sabado", saturday.value);

    var sunday = document.getElementById("domingo");
    localStorage.setItem("horas_domingo", sunday.value);

    var horas_semanales = parseInt(monday.value) + parseInt(tuesday.value) + parseInt(wednesday.value) + parseInt(thursday.value) + parseInt(friday.value) + parseInt(saturday.value) + parseInt(sunday.value);
    localStorage.setItem("horas_semanales", horas_semanales);

    const tarea_nombre = document.getElementById("taskName").value;
    const totalHours = document.getElementById("totalHours").value;
    const weeksNeeded = totalHours / horas_semanales;
    
    const fechafinal = new Date();
    fechafinal.setDate(fechafinal.getDate() + (weeksNeeded * 7));
    
    const result = `La tarea "${tarea_nombre}" terminara el ${fechafinal.toDateString()}.`;
    console.log(result);
  }


