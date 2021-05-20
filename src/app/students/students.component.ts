import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})

export class StudentsComponent {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['name', 'Surname', 'class', 'plan' ];
  expandedElement: PeriodicElement | null | undefined;
  displayedColumns: string[] = ['name', 'Surname', 'class', 'plan'];
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
  plan: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Jakub',
    Surname: 'Piłat',
    class: '1A',
    description: `nr. tel:987654321`,
    plan: 'plan'
  }, {
    name: 'Mateusz',
    Surname: 'Ładyko',
    class: '1A',
    description: `nr. tel:987654321`,
    plan: 'plan'
  },
];

