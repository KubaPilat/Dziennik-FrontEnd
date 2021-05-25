import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class HttpService {

  constructor(private http: HttpClient) {}

    getPosts(): Observable<Array<Post>> {
      return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
    }

  getPost(id: number):Observable<Post>{
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getPostById(UserId: number):Observable<Post>{
    const param = new HttpParams().set('userId', '1');
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + {params: param});
  }


}
