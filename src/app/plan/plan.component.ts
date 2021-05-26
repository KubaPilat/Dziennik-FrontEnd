import {Component, OnInit} from '@angular/core';
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
    this.service.getDatacomments().then(data => {
      this.dataSource = data;
    });
  }
  // ClassFilter = (event: Event) => {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.data.filter = filterValue.trim().toLowerCase();
  // }
}

export interface Data {
  id: number;
}
