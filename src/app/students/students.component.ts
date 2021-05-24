import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  //animacja jest potrzebna do otwierania paneli
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
// analogicznie jak w komponencie class
export class StudentsComponent {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['name', 'Surname', 'class'];
  expandedElement: PeriodicElement | null | undefined;
  displayedColumns: string[] = ['name', 'Surname', 'class'];
  ELEMENT_DATA: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


export interface PeriodicElement {
  name: string;
  Surname: string;
  class: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Jakub',
    Surname: 'Piłat',
    class: '1A',
    description: `nr. tel:987654321`,
  }, {
    name: 'Mateusz',
    Surname: 'Ładyko',
    class: '1A',
    description: `nr. tel:987654321`,
  },
];

