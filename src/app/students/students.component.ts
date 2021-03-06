import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
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
  expandedElement: Data | undefined;
  displayedColumns: string[] = ['name', 'phone', 'email', 'website', 'id', 'address'];
  dataSource: string[] = [];

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
  id: number;
  address: string;
}
