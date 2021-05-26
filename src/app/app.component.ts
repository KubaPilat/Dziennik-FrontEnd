import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allPosts$!: Observable<Array<Post>>;

  constructor(private  httpService: HttpService) {}
  title = 'dziennik';

  getPosts(){
  this.allPosts$ = this.httpService.getPosts();
  }

  getPost(){
    this.httpService.getPost(2).subscribe(posts =>{
      console.log(posts);
    });
  }

  getTitle(){
    this.httpService.getPost(2).subscribe(posts =>{
      console.log(posts.name);
    });
  }

  getPostById(){
    for (let i=1; i<6; i++){
      this.httpService.getPost(i).subscribe(posts => {
      console.log(i , posts.name);})
    };
  }

  getPostFor(){
    for (let i=1; i<6; i++){
      this.httpService.getPost(i).subscribe(posts => {
        console.log(i , posts);})
    };
  }

  addPost(){
    // @ts-ignore
    const p: Post =({
      userId: 1,
      id: 1,
      title: 'nie wiem co dac',
      body: 'tu tez nie wiem',
    });

    this.httpService.addPost(p).subscribe(post => {
      console.log(post)
    })

  }


}


export interface Post {
  userId: number;
  id: number;
  title: string;
  name: string;
  body: string;
}
