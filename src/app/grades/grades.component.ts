import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  Name: string;
  surname: string;
  class: string;
}

// Analogicznie jak w class, możesz przygotować resta :)
const ELEMENT_DATA: PeriodicElement[] = [
  {Name: 'Kuba', surname: 'Piłat', class: '1A'},
  {Name: 'Kuba', surname: 'Piłat', class: '1B'},
  {Name: 'Kuba', surname: 'Piłat', class: '1C'},
  {Name: 'Kuba', surname: 'Piłat', class: '2A'},
  {Name: 'Kuba', surname: 'Piłat', class: '2B'},
  {Name: 'Kuba', surname: 'Piłat', class: '2C'},
  {Name: 'Kuba', surname: 'Piłat', class: '3A'},
  {Name: 'Kuba', surname: 'Piłat', class: '3B'},
  {Name: 'Kuba', surname: 'Piłat', class: '3C'},
];


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  displayedColumns: string[] = ['Name', 'surname', 'class'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
