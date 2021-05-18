import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
// import { SendComponent } from '../send/send.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {
  displayedColumns: string[] = ['nadawca', 'temat', 'dataWyslania', 'text'];
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

  // sendMessage() {
  //   this.dialog.open(SendMessage);
  // }
}

export interface PeriodicElement {
  nadawca: string;
  temat: string;
  dataWyslania: string;
  text: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nadawca: 'Adam Kruża', temat: 'Zawody', dataWyslania: '15.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet '},
  {nadawca: 'asd Kruża', temat: 'p', dataWyslania: '15.02.2021', text: 'lorem inpusm doloret mit amet'},
  {nadawca: '159357 Kruża', temat: 's', dataWyslania: '17.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit'},
  {nadawca: 'kjgh Kruża', temat: 'd', dataWyslania: '18.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem'},
  {nadawca: 'try Kruża', temat: 'f', dataWyslania: '19.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm m'},
  {nadawca: 'jhgf Krjhfuża', temat: 'Zawoddfghy', dataWyslania: '28.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet '},
  {nadawca: 'asd Krujfgża', temat: 'hgfdp', dataWyslania: '27.02.2021', text: 'lorem inpusm doloret mit amet'},
  {nadawca: '159357 Krsdfuża', temat: 'sfdsh', dataWyslania: '30.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit'},
  {nadawca: 'kjgh Kru47ża', temat: 'afdgd', dataWyslania: '25.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem'},
  {nadawca: 'try Krasduża', temat: 'fgadfg', dataWyslania: '10.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm m'},
  {nadawca: 'Adam Kruża', temat: 'Zawody', dataWyslania: '15.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet '},
  {nadawca: 'asd Kruża', temat: 'p', dataWyslania: '15.02.2021', text: 'lorem inpusm doloret mit amet'},
  {nadawca: '159357 Kruża', temat: 's', dataWyslania: '17.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit'},
  {nadawca: 'kjgh Kruża', temat: 'd', dataWyslania: '18.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem'},
  {nadawca: 'try Kruża', temat: 'f', dataWyslania: '19.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm m'},
  {nadawca: 'jhgf Krjhfuża', temat: 'Zawoddfghy', dataWyslania: '28.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet '},
  {nadawca: 'asd Krujfgża', temat: 'hgfdp', dataWyslania: '27.02.2021', text: 'lorem inpusm doloret mit amet'},
  {nadawca: '159357 Krsdfuża', temat: 'sfdsh', dataWyslania: '30.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit'},
  {nadawca: 'kjgh Kru47ża', temat: 'afdgd', dataWyslania: '25.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem'},
  {nadawca: 'try Krasduża', temat: 'fgadfg', dataWyslania: '10.02.2021', text: 'lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm doloret mit amet lorem inpusm m'},
];

// @Component({
//   selector: 'send',
//   templateUrl: '../send/send.component.html',
// })
// export class SendMessage {}
