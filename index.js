var prompt = require('prompt-sync')();
import {tareas} from './tareas.js';


let aTareas = [];

function darNombre() {
  const nombre = prompt("Ingrese su nombre");
  return nombre;
}

function mostrarMenuPrincipal() {
  let op;
  const nombre = darNombre();

  do {
    console.log('Hola: ' + nombre);
    console.log("¿Qué deseas hacer?");
    console.log("[1] Ver Mis tareas");
    console.log("[2] Buscar mis tareas");
    console.log("[3] Agregar una tarea");
    console.log("[0] Salir...");
    op = prompt("Ingrese el número de la opción: \n");
    switch (op) {
      case "1":
        mostrarMenuTareas();
        break;
      case "2":
        buscarTarea();
        break;
      case "3":
        tareas.agregarTarea();
        break;
      case "0":
        console.log("Saliendo del sistema...");
        break;
      default:
        console.log("Opción no válida");
    }

  } while (op !== '0');
}

function mostrarMenuTareas() {
  console.log("Ver mis tareas");
  console.log("[1] Todas las tareas");
  console.log("[2] Tareas pendientes");
  console.log("[3] Tareas en curso");
  console.log("[4] Tareas terminadas");
  console.log("[5] Volviendo al menú principal");
  let opcion = prompt("Ingrese el número de la opción");
  switch (opcion) {
    case "1":
      mostrarTodasTareas();
      break;
    case "2":
      mostrarTareasPendientes();
      break;
    case "3":
      mostrarTareasEncurso();
      break;
    case "4":
      mostrarTareasTerminadas();
      break;
    case "0":
      console.log("Volviendo al menú principal");
      break;
    default:
      console.log("Opción no válida");
  }
}

function mostrarTodasTareas() {
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

function mostrarTareasPendientes() {
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

function mostrarTareasEncurso() {
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

function mostrarTareasTerminadas() {
  let tareasTerminadas = [];
  for (let i = 0; i < aTareas.length; i++) {
    if (aTareas[i].estado.toLowerCase() === "terminada") {
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

function buscarTarea() {
  let busqueda = prompt("Ingrese el título o parte del mismo para buscar la tarea");
  let resultados = [];

  // Búsqueda clásica letra por letra
  for (let i = 0; i < aTareas.length; i++) {
    let tituloActual = aTareas[i].titulo.toLowerCase();
    let busquedaLower = busqueda.toLowerCase();
    
    let match = true; // Bandera para detectar si se encuentra coincidencia

    // Comparar cada letra de la búsqueda con el título
    for (let j = 0; j < busquedaLower.length; j++) {
      if (tituloActual[j] !== busquedaLower[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      resultados.push(aTareas[i]);
    }
  }

  if (resultados.length > 0) {
    console.log(`**Resultados de búsqueda para "${busqueda}":**`);
    for (let i = 0; i < resultados.length; i++) {
      console.log(`${i + 1}. ${resultados[i].titulo}`);
    }
    console.log("0 para volver al menú");
    let opcion = prompt("Ingrese el número de la tarea que desea ver");
    if (opcion === "0") {
      console.log("Volviendo al menú principal");
    } else {
      let tarea = resultados[parseInt(opcion) - 1];
      if (tarea) {
        tarea.mostrarDetalles();
      } else {
        console.log("Tarea no encontrada");
      }
    }
  } else {
    console.log(`No se encontraron resultados para la búsqueda "${busqueda}"`);
  }
}

mostrarMenuPrincipal();
