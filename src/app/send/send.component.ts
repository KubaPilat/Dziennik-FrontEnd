import { Component } from '@angular/core';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

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

  task: Task = {
    name: 'Wszyscy',
    completed: false,
    subtasks: [
      {name: 'Kuba', completed: false},
      {name: 'Mati', completed: false},
      {name: 'XYZ', completed: false}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }
}
