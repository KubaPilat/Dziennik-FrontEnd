import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  //to samo co w student panele
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ClassComponent {

  constructor(private  httpService: HttpService) {}

  displayedColumns: string[] = ['class'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  allPosts$: any;

  ClassFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // @ts-ignore
  allPosts$: Observable<Array<Post>>;

  getTitle(){
    this.allPosts$ = this.httpService.getPost(2);
  }

}

export interface PeriodicElement {
  class: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  name: string;
  body: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {class: '1A'},
  {class: '1B'},
  {class: '1C'},
  {class: '2A'},
  {class: '2B'},
  {class: '2C'},
  {class: '3A'},
  {class: '3B'},
  {class: '3C'},
];
