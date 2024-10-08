import prompt from 'prompt-sync';
let prompT = prompt();
import aTareas from './index.js';
export default function Tarea(titulo, descripcion, vencimiento, dificultad) {
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
        console.log(`Fecha de Creación: ${this.fechaCreacion}`);
        console.log(`Última Edición: ${this.fechaUltimaEdicion || 'No se ha editado'}`);
        console.log(`Vencimiento: ${this.vencimiento || 'Sin vencimiento'}`);
        console.log(`Dificultad: ${this.dificultad === 1 ? '⭐' : this.dificultad === 2 ? '⭐⭐' : '⭐⭐⭐'}`);
    }
    this.agregarTarea = function () {
        this.titulo = prompT("Ingrese el título de la tarea:");
        this.descripcion = prompT("Ingrese la descripción de la tarea:");
        this.vencimiento = prompT("Ingrese la fecha de vencimiento de la tarea (Formato AAAA-MM-DD)");
        this.dificultad = parseInt(prompT('Ingrese la dificultad de la tarea (1: Fácil, 2: Medio, 3: Difícil):')) || 1;
        this.fechaCreacion = new Date();
        this.fechaUltimaEdicion = null;
        console.log("Tarea agregada correctamente");
    }

    this.GetEstado = function () {
        return this.estado;
    }
    this.GetTitulo = function () {
        return this.titulo;
    }
    this.GetDescripcion = function () {
        return this.descripcion;
    }
    this.GetVencimiento = function () {
        return this.vencimiento;
    }
    this.GetDificultad = function () {
        return this.dificultad;
    }
    this.GetFechaCreacion = function () {
        return this.fechaCreacion;
    }
    this.GetfechaUltimaEdicion = function () {
        return this.fechaUltimaEdicion;
    }
    this.SetEstado = function (nuevoEstado) {
        this.estado = nuevoEstado;
    }
    this.SetTitulo = function (nuevo) {
        this.titulo = nuevo;
    }
    this.SetDescripcion = function (nuevo) {
        this.descripcion = nuevo;
    }
    this.SetVencimiento = function (nuevo) {
        this.vencimiento = nuevo;
    }
    this.SetDificultad = function (nuevo) {
        this.dificultad = nuevo;
    }
    this.SetFechaUltimaEdicion = function (nuevo) {
        this.fechaUltimaEdicion = nuevo;
    }

};
