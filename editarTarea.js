import promptSync from 'prompt-sync';
const prompt = promptSync();

import aTareas from './index.js';
export default  function Menu (tarea, indice) {
    let op = ``;
    console.log(`Desea editar esta tarea?`);
    console.log(`[1] Si.`);
    console.log(`[2] No`);
    op = prompt();
    if(op == `1`){
        editarTarea(tarea, indice);
    }
    else{
        console.log("Volviendo...");
    }
}
export function editarTarea(tarea, indice) {//función que se encarga de editar las tareas
    console.log("Editando tarea");

    let nuevoTitulo = prompt("Nuevo título (dejar en blanco para mantener el actual):");
    if (nuevoTitulo) tarea.titulo = nuevoTitulo;

    let nuevaDescripcion = prompt("Nueva descripción (dejar en blanco para mantener el actual):");
    if (nuevaDescripcion) tarea.descripcion = nuevaDescripcion;

    let nuevoEstado = prompt("Nuevo estado (Pendiente, En curso, Terminada, Cancelada):");
    while(nuevoEstado && !['pendiente','en curso','terminada']){
      console.log("Ingrese una de los estados anteriores por pantalla");
      nuevoEstado=prompt("Nuevo estado: ");
    }

    if (nuevoEstado) tarea.estado = nuevoEstado.trim().toLowerCase();
    let nuevaDificultad = prompt("Nueva dificultad (1: Fácil, 2: Medio, 3: Difícil):");

    while (nuevaDificultad && (isNaN(parseInt(nuevaDificultad)) || parseInt(nuevaDificultad) < 1  || parseInt(nuevaDificultad) > 3)) {
      console.log("Dificultad inválida. Por favor, ingrese un número entre 1 y 3");
      nuevaDificultad = prompt("Nueva dificultad: ");
    }

    if(nuevaDificultad) tarea.dificultad=nuevaDificultad;

    tarea.fechaUltimaEdicion = new Date();
    aTareas[indice] = tarea;
    console.log("Tarea editada correctamente");

}