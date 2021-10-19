import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/books';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post('login', { username, password });
  }

  getProducts(): Observable<Book[]> {
    return this.http.get<Book[]>('books', {
      headers: {},
    });
  }
}