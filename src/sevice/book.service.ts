import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
import {environment} from '../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + `/books`);
  }
  createNewBook(book: Book): Observable<Book> {
    return this.http.post<Book>(API_URL + `/books`, book);
  }
  getBookById(id: number): Observable<Book> {
    return  this.http.get<Book>(API_URL + `/books/${id}`);
  }
  updateBook(id: number, product: Book): Observable<Book> {
    return this.http.put<Book>(API_URL + `/books/${id}`, product);
  }
  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(API_URL + `/books/${id}`);
  }
}
