import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})

export class TeachersComponent {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['name', 'Surname'];
  expandedElement: PeriodicElement | null | undefined;
  displayedColumns: string[] = ['name',  'Surname'];
  ELEMENT_DATA: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


export interface PeriodicElement {
  name: string;
  Surname: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Jakub',
    Surname: 'Piłat',
    description: `nr. tel:123456789`
  }, {
    name: 'Mateusz',
    Surname: 'Ładyko',
    description: `nr. tel:987654321`
  },
];
