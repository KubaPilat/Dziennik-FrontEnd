import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  // animacja jest potrzebna do otwierania paneli
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class StudentsComponent {
  columnsToDisplay: string[] = ['name', 'email'];
  expandedElement: Data | null | undefined;
  displayedColumns: string[] = ['name', 'phone', 'email', 'website', 'phone', 'id', 'address'];
  dataSource: any[] = [];

  constructor(private service: ApiService){
    this.service.getDataUsers().then(data => {
      this.dataSource = data;
    });
  }

}

export interface Data {
  name: string;
  phone: string;
  email: string;
  website: string;
}
