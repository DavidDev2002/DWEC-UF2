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
  }