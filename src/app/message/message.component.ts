import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class MessageComponent {
  columnsToDisplay: string[] = ['id', 'email'];
  expandedElement: Data | undefined;
  displayedColumns: string[] = ['body'];
  dataSource: string[] = [];

  constructor(private service: ApiService){
    this.service.getDatacomments().then(data => {
      this.dataSource = data;
    });
  }
}

export interface Data {
  name: string;
  email: string;
  body: string;
}
