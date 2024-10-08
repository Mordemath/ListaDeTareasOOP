export function mostrarTodasTareas() {
    console.log("Estas son todas tus tareas");
    for (let i = 0; i < aTareas.length; i++) {
      console.log(`${i + 1}. ${aTareas[i].titulo}`);
    }
    console.log("0. Para volver al menú principal");
    let opcion = prompt("Ingrese el número de la tarea que desea ver:");
    if (opcion === "0") {
      console.log("Volviendo al menú principal...");
    } else {
      let tarea = aTareas[opcion - 1];
      if (tarea) {
        console.log(`Título: ${tarea.titulo}`);
        console.log(`Descripción: ${tarea.descripcion}`);
      } else {
        console.log("Tarea no encontrada");
      }
    }
  }
  
 export function mostrarTareasPendientes() {
    let tareasPendientes = [];
    for (let i = 0; i < aTareas.length; i++) {
      if (aTareas[i].estado.toLowerCase() === "pendiente") {
        tareasPendientes.push(aTareas[i]);
      }
    }
    if (tareasPendientes.length > 0) {
      console.log("Tareas pendientes:");
      for (let i = 0; i < tareasPendientes.length; i++) {
        console.log(`${i + 1}. ${tareasPendientes[i].titulo}`);
      }
      console.log("0 para volver al menú principal");
      let opcion = prompt("Ingrese un número para ver la tarea que desea ver");
      if (opcion === "0") {
        console.log("Volviendo al menú principal");
      } else {
        let tarea = tareasPendientes[parseInt(opcion) - 1];
        if (tarea) {
          tarea.mostrarDetalles();
        } else {
          console.log("Tarea no encontrada");
        }
      }
    } else {
      console.log("No hay tareas pendientes");
    }
  }
  
 export function mostrarTareasEncurso() {
    let tareasEnCurso = [];
    for (let i = 0; i < aTareas.length; i++) {
      if (aTareas[i].estado.toLowerCase() === "en curso") {
        tareasEnCurso.push(aTareas[i]);
      }
    }
    if (tareasEnCurso.length > 0) {
      console.log("Tareas en curso:");
      for (let i = 0; i < tareasEnCurso.length; i++) {
        console.log(`${i + 1}. ${tareasEnCurso[i].titulo}`);
      }
      console.log("0 Para volver al menú principal");
      let opcion = prompt("Ingrese un número para ver la tarea que desea ver");
      if (opcion === "0") {
        console.log("Volviendo al menú principal");
      } else {
        let tarea = tareasEnCurso[parseInt(opcion) - 1];
        if (tarea) {
          tarea.mostrarDetalles();
        } else {
          console.log("Tarea no existente");
        }
      }
    } else {
      console.log("No hay tareas en curso");
    }
  }
  
 export  function mostrarTareasTerminadas() {
    let tareasTerminadas = [];
    for (let i = 0; i < aTareas.length; i++) {
      if (aTareas[i].GetEstado.toLowerCase() === "terminada") {
        tareasTerminadas.push(aTareas[i]);
      }
    }
    if (tareasTerminadas.length > 0) {
      console.log("Tareas terminadas:");
      for (let i = 0; i < tareasTerminadas.length; i++) {
        console.log(`${i + 1}. ${tareasTerminadas[i].titulo}`);
      }
      console.log("0 Para volver al menú principal");
      let opcion = prompt("Ingrese el número de la tarea que desea ver");
      if (opcion === "0") {
        console.log("Volviendo al menú principal");
      } else {
        let tarea = tareasTerminadas[parseInt(opcion) - 1];
        if (tarea) {
          tarea.mostrarDetalles();
        } else {
          console.log("No existe esa tarea");
        }
      }
    } else {
      console.log("No hay tareas terminadas");
    }
  }