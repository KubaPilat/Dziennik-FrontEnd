import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';

//znowu potrzebne do paneli
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class PlanComponent {
  displayedColumns: string[] = ['class'];
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
