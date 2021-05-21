import { Component } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent {

  topic!: string;
  text!: string;

  send():void{
    //nie wiedziałem co zrobić więc zrobiłem console.log z danymi z formularza bo czekam na backend
    const data =  {topic: this.topic, text: this.text}
    console.log(data)
  }
}
