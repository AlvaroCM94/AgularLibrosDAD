import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Book } from '../models/books';

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

export class BookService {

  //private REST_API_SERVER = "http://localhost:3306/books"; 
  endpoint: string = "http://localhost:8080/libro";

  constructor(private httpClient: HttpClient){}

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.endpoint).pipe(
      tap(_=> console.log("Book retrieved")),
      catchError(this.handleError<Book[]>("Get book", []))
    );
  }
  /*
  getBookById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(this.endpoint + "/" + id).pipe(
      tap(_ => console.log(`Book fetched: ${id}`)),
      catchError(this.handleError<Book>(`Get Book id=${id}`))
    );
  }*/
/*
  createBook(book: Book): Observable<Book>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", book.nombre);
    bodyEncoded.append("autor", book.autor);
    bodyEncoded.append("disponiblidad", book.disponiblidad.toString());
    bodyEncoded.append("descripcion", book.descripcion);
    const body = bodyEncoded.toString();

    console.log("createBook")
    console.log(JSON.stringify(book))
    return this.httpClient.post<Book>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  }

  createBookUsingJSON(book: Book): Observable<Book>{
    return this.httpClient.post<Book>(this.endpoint, JSON.stringify(book), httpOptions).pipe(
      catchError(this.handleError<Book>("Error ocurred"))
    );
  }

  deleteBook(idBook: number): Observable<Book>{
    return this.httpClient.delete<Book>(this.endpoint + "/" + idBook).pipe(
      tap(_=> console.log(`Deleted bbok: ${idBook}`)),
      catchError(this.handleError<Book>("Delete book"))
    );
  }

  updateBook(id: number, book: Book): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", book.nombre);
    bodyEncoded.append("autor", book.autor);
    bodyEncoded.append("disponiblidad", book.disponiblidad.toString());
    bodyEncoded.append("descripcion", book.descripcion);
    const body = bodyEncoded.toString();

    return this.httpClient.put(this.endpoint + "/" + id, body, httpOptionsUsingUrlEncoded).pipe(
      tap(_=> console.log(`Update book: ${id}`)),
      catchError(this.handleError<Book[]>("Update book"))
    );
  }
*/
  


}