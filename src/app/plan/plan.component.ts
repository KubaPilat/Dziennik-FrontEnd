import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})

export class PlanComponent {
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
