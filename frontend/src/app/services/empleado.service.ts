import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Empleado } from '../models/empleado';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

const httpCors = {
  headers: new HttpHeaders().set( 'Access-Control-Allow-Origin', '*' )
};


@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  endpoint: string = "http://localhost:8080/empleado";

  constructor(private httpClient: HttpClient){}

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
  getEmpleados(): Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(this.endpoint).pipe(
      tap(_=> console.log("Empleado retrieved")),
      catchError(this.handleError<Empleado[]>("Get empleado", []))
    );
  }

//   getEmpleadoServiceByName(nombre: string): Observable<Empleado>{
//     return this.httpClient.get<Empleado>(this.endpoint).pipe(
//       tap(_ => console.log(`Empleado fetched: ${nombre}`)),
//       catchError(this.handleError<Empleado>(`Get empleado name=${nombre} no encontrado`))
//     );
//   }
}