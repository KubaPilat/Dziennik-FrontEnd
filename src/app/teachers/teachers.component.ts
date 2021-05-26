import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TeachersComponent {


  columnsToDisplay: string[] = ['name', 'phone', 'email', 'website'];
  expandedElement: Data | null | undefined;
  displayedColumns: string[] = ['name',  'email'];

  dataSource: any[] = [];

  constructor(private service: ApiService){
    this.service.getDataUsers().then(data => {
      this.dataSource = data;
    });
  }


  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  // columnsToDisplay = ['name', 'Surname'];
  // ELEMENT_DATA: any;
  //
  // applyFilter = (event: Event) => {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
}

export interface Data {
  name: string;
  phone: string;
  email: string;
  website: string;
}
