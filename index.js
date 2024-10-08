import prompt from 'prompt-sync';
let prompT = prompt();
import Tarea from './tareas.js';
import * as Mostrar from './Mostrar.js';
import  buscarTarea from './buscarTarea.js';
let tareas = new Tarea(" "," "," "," ");
let aTareas = [];
let aux;
export default aTareas;

function mostrarMenuPrincipal() {
  let op;
console.log(`Hola Olivia!!`);
  do {
    console.log("¿Qué deseas hacer?");
    console.log("[1] Ver Mis tareas");
    console.log("[2] Buscar mis tareas");
    console.log("[3] Agregar una tarea");
    console.log("[0] Salir...");
    op = prompT("Ingrese el número de la opción:");
    switch (op) {
      case "1":
        mostrarMenuTareas();
        break;
      case "2":
        buscarTarea();
        break;
      case "3":
        aux = new Tarea(" "," "," "," ");
        aux.agregarTarea();
        aTareas.push(aux);
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
  let opcion = prompT("Ingrese el número de la opción");
  switch (opcion) {
    case "1":
      Mostrar.mostrarTodasTareas();
      break;
    case "2":
      Mostrar.mostrarTareasPendientes();
      break;
    case "3":
      Mostrar.mostrarTareasEncurso();
      break;
    case "4":
      Mostrar.mostrarTareasTerminadas();
      break;
    case "0":
      console.log("Volviendo al menú principal");
      break;
    default:
      console.log("Opción no válida");
  }
}
mostrarMenuPrincipal();
