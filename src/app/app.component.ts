import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private  httpService: HttpService) {}
  title = 'dziennik';

  getPosts(){
  this.httpService.getPosts().subscribe(posts =>{
    console.log(posts);
  });}

  getPost(){
    this.httpService.getPost(2).subscribe(posts =>{
      console.log(posts);
    });}

  getPostById(){
    this.httpService.getPostById(1).subscribe(posts =>{
      console.log(posts);
  });}

}


export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
