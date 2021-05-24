import { Component } from '@angular/core';

export interface PeriodicElement {
  subject: string;
  gradesI: string;
  gradesII: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {subject: 'Polski', gradesI: '2,1,2,1,1', gradesII: '4,2,3,1,5,3,2,'},
  {subject: 'Matematyka', gradesI: '5,3,4,6,2', gradesII: '4,2,4,1,5,3,2,'},
  {subject: 'Angielski', gradesI: '1,np,6,5,2', gradesII: '1,2,3,4,5,3,2,'},
  {subject: 'Biologia', gradesI: '6,4,5,1,3', gradesII: '2,2,3,1,5,3,2,'},
  {subject: 'Chemia', gradesI: '5,3,4,2,1', gradesII: '3,2,3,1,5,3,2,'},
  {subject: 'Niemiecki', gradesI: '4,5,5,5,4,1,2', gradesII: '3,2,3,1,5,3,2,'},
  {subject: 'W-f', gradesI: '6,3,5,4,1', gradesII: '1,2,3,1,5,3,2,'},
  {subject: 'Fizyka', gradesI: '3,2,5,3,2', gradesII: '2,2,3,1,5,3,2,'},
  {subject: 'Informatyka', gradesI: '3,2,4,1,np', gradesII: '6,np,3,1,5,3,2,'},
  {subject: 'Historia', gradesI: '4,2,3,1,5,3,2,', gradesII: '4,2,3,1,5,3,2,'},
];

@Component({
  selector: 'app-grades-detail',
  templateUrl: './grades-detail.component.html',
  styleUrls: ['./grades-detail.component.css']
})
export class GradesDetailComponent {

  displayedColumns: string[] = ['subject', 'gradesI', 'gradesII'];
  dataSource = ELEMENT_DATA;
}
