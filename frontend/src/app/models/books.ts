export class Book {
    id: number;
    nombre: string;
    autor: string;
    disponibilidad: boolean;
    descripcion: string;

    constructor(id: number, nombre: string, autor: string, disponiblidad: boolean, descripcion: string) { 
        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.disponibilidad = disponiblidad;
        this.descripcion = descripcion;
    }
}