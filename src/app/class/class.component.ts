import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  // to samo co w student panele, ponownie ;)
  animations: [
    // to w jakim celu jest?, ponownie ;)
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ClassComponent {

  // eksapsulacja
  displayedColumns: string[] = ['id'];

    // eksapsulacja, czemu any?
  dataSource: any[] = [];

  constructor(private service: ApiService){
    this.service.getDataUsers().then(data => {
      this.dataSource = data;
    });
  }
}

export interface Data {
  Id: number;
}
