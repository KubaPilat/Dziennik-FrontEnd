import { Component} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {

// enkapsulacja, any?
  user: any[] = [];

  constructor(private service: ApiService){
    this.service.getDatacomments().then(data => {
      this.user = data;
    });
  }
}


export interface Data {
  name: string;
  body: string;
  email: string;
  id: number;
}
