import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getDataUsers(): Promise<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users').
    toPromise();
  }

  getDatacomments(): Promise<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/comments').
    toPromise();
  }

}
