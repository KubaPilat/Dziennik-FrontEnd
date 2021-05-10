import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'Surname'];
  expandedElement: PeriodicElement | null | undefined;
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
