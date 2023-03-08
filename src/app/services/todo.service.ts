import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ITodo {
  title: string;
  completed?: boolean;
  id: number;
}

@Injectable({
  providedIn: 'root', // uygulama genelinde provider olarak eklenmese dahi tüm modüllerden single instance ile erişmemizi sağlayan bir decorator.
})
export class TodoService {
  // get,post,put,delete,patch httpverb
  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    // not subscribe işlemleri service seviyes yapılmaz
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
