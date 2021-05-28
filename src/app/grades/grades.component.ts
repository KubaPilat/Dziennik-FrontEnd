import {Component} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  // enkapsulacja
  displayedColumns: string[] = ['id', 'name', 'username', 'actions'];
// enkapsulacja, czemu any?
  dataSource: any[] = [];

  constructor(private service: ApiService){
    this.service.getDataUsers().then(data => {
      this.dataSource = data;
    });
  }
}

// modele wyciągamy do innego katalogu bo przeważnie sa one reużywalne w innych plikach
export interface Data {
  id: number;
  name: string;
  username: string;
}
