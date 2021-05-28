import {Component} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  displayedColumns: string[] = ['id', 'name', 'username', 'actions'];

  dataSource: any[] = [];

  constructor(private service: ApiService){
    this.service.getDataUsers().then(data => {
      this.dataSource = data;
    });
  }
}

export interface Data {
  id: number;
  name: string;
  username: string;
}
