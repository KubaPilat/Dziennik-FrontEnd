// nie potrzebny import
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})

export class PlanComponent {
  displayedColumns: string[] = ['class', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ClassFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  class: string;
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
