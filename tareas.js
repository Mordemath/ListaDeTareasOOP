export function Tarea (titulo, descripcion, vencimiento, dificultad) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.vencimiento = vencimiento;
    this.dificultad = dificultad; // 1=facil, 2=medio, 3=dificil
    this.estado = 'Pendiente'; // estado inicial
    this.fechaCreacion = new Date();
    this.fechaUltimaEdicion = null;

      this.mostrarDetalles = function () {
      console.log(Título: ${this.titulo});
      console.log(Descripción: ${this.descripcion || 'Sin descripción'});
      console.log(Estado: ${this.estado});
      console.log(Fecha de Creación: ${this._fechaCreacion});
      console.log(Última Edición: ${this._fechaUltimaEdicion || 'No se ha editado'});
      console.log(Vencimiento: ${this.vencimiento || 'Sin vencimiento'});
      console.log(Dificultad: ${this.dificultad === 1 ? '⭐' : this.dificultad === 2 ? '⭐⭐' : '⭐⭐⭐'});
    }
this.agregarTarea = function () {
    this.titulo = prompt("Ingrese el título de la tarea:");
    this.descripcion = prompt("Ingrese la descripción de la tarea:");
    this.vencimiento = prompt("Ingrese la fecha de vencimiento de la tarea (Formato AAAA-MM-DD)");
    this.dificultad = parseInt(prompt('Ingrese la dificultad de la tarea (1: Fácil, 2: Medio, 3: Difícil):')) || 1;
    this.tarea = new Tarea(titulo, descripcion, vencimiento, dificultad);
    aTareas.push(tarea);
    console.log("Tarea agregada correctamente");
  }

  this.GetEstado = function () {
    return this.estado;
  }

  };