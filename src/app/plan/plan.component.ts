import {Component} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})

export class PlanComponent {
  displayedColumns: string[] = ['id', 'actions'];

  dataSource: any[] = [];

  constructor(private service: ApiService){
    this.service.getDataUsers().then(data => {
      this.dataSource = data;
    });
  }
}

export interface Data {
  id: number;
}
