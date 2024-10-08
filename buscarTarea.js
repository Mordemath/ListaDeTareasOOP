export function buscarTarea() {
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
  