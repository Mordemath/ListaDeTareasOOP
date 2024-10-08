export function Tarea (titulo, descripcion, vencimiento, dificultad) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.vencimiento = vencimiento;
    this.dificultad = dificultad; // 1=facil, 2=medio, 3=dificil
    this.estado = 'Pendiente'; // estado inicial
    this.fechaCreacion = new Date();
    this.fechaUltimaEdicion = null;

      this.mostrarDetalles = function () {
        console.log(`Título: ${this.titulo}`);
        console.log(`Descripción: ${this.descripcion || 'Sin descripción'}`);
        console.log(`Estado: ${this.estado}`);
        console.log(`Fecha de Creación: ${this._fechaCreacion}`);
        console.log(`Última Edición: ${this._fechaUltimaEdicion || 'No se ha editado'}`);
        console.log(`Vencimiento: ${this.vencimiento || 'Sin vencimiento'}`);
        console.log(`Dificultad: ${this.dificultad === 1 ? '⭐' : this.dificultad === 2 ? '⭐⭐' : '⭐⭐⭐'}`);
      }


  };
