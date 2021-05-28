import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

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

  constructor(private _snackBar: MatSnackBar, private _router:Router, private httpClient:HttpClient){}


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

  send(): void {
    const data = {topic: this.topic, text: this.text};
    if (this.topic == '' || this.topic == undefined ) {
      this._snackBar.open('Wiadomość musi zawierać temat', 'Zamknij');
    } else if (this.text == '' || this.text == undefined) {
      this._snackBar.open('Wiadomość musi zawierać treść', 'Zamknij');
    } else {
      console.log(data);
      this.httpClient.post(`https://jsonplaceholder.typicode.com/comments`,
        {data}).subscribe()
      this._snackBar.open('Wiadomość zostało wysłane', 'Zamknij');
      this._router.navigate(['./', 'stronaGlowna']);
    }
  }

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
