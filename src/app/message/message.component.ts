import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {
  displayedColumns: string[] = ['nadawca', 'temat', 'data'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  nadawca: string;
  temat: string;
  data: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nadawca: 'Adam Kruża', temat: 'Zawody', data: '15.02.2021'},
  {nadawca: 'Adam Kruża', temat: 'a', data: '15.02.2021'},
  {nadawca: 'Adam Kruża', temat: 's', data: '17.02.2021'},
  {nadawca: 'Adam Kruża', temat: 'd', data: '18.02.2021'},
  {nadawca: 'Adam Kruża', temat: 'f', data: '19.02.2021'},
  {nadawca: 'Adam Kruża', temat: 'g', data: '20.02.2021'},
  {nadawca: 'Adam Kruża', temat: 'h', data: '21.02.2021'},
  {nadawca: 'Adam Kruża', temat: 'j', data: '22.02.2021'},
  {nadawca: 'Adam Kruża', temat: 'k', data: '23.02.2021'},
  {nadawca: 'Adam Kruża', temat: 'l', data: '24.02.2021'},
];
