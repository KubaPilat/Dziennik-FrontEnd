import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {
  displayedColumns: string[] = ['sender', 'topic', 'date', 'text'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  openDialog(row: PeriodicElement) {
    const dialog = this.dialog.open(DialogComponent, {
      disableClose: true,
      data: row
    });
  }

}

export interface PeriodicElement {
  sender: string;
  topic: string;
  date: string;
  text: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sender: 'Adam Kruża', topic: 'Zawody', date: '15.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet '},
  {sender: 'asd Kruża', topic: 'p', date: '15.02.2021', text: 'lorem inpusm doloret mit amet'},
  {sender: '159357 Kruża', topic: 's', date: '17.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit'},
  {sender: 'kjgh Kruża', topic: 'd', date: '18.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem'},
  {sender: 'try Kruża', topic: 'f', date: '19.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm m'},
  {sender: 'jhgf Krjhfuża', topic: 'Zawoddfghy', date: '28.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet '},
  {sender: 'asd Krujfgża', topic: 'hgfdp', date: '27.02.2021', text: 'lorem inpusm doloret mit amet'},
  {sender: '159357 Krsdfuża', topic: 'sfdsh', date: '30.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit'},
  {sender: 'kjgh Kru47ża', topic: 'afdgd', date: '25.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem'},
];

