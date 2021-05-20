import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';

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
  displayedColumns: string[] = ['position'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ClassFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '1A'},
  {position: '1B'},
  {position: '1C'},
  {position: '2A'},
  {position: '2B'},
  {position: '2C'},
  {position: '3A'},
  {position: '3B'},
  {position: '3C'},
];
