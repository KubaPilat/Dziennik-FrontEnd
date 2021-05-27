import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {

  displayedColumns: string[] = ['name', 'body', 'email', 'id'];

  dataSource: any[] = [];

  constructor(private service: ApiService){
    this.service.getDatacomments().then(data => {
      this.dataSource = data;
    });
  }
  // constructor(private dialog: MatDialog) {
  // }
  // openDialog = ({row}: ) => {
  //   const dialog = this.dialog.open(DialogComponent, {
  //     disableClose: true,
  //     data: row
  //   });
  // }
}

export interface Data {
  name: string;
  body: string;
  email: string;
  id: number;
}
