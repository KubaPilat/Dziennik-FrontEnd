import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)
export class HttpService {

  link = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.link);
  }

  getPost(id: number):Observable<Post>{
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/users/' + id);
  }

  getPostById(UserId: number):Observable<Post>{
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/users/1/comments?id=' + UserId);
  }

  addPost(post: Post):Observable<Post>{
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts/', post);
  }

}
