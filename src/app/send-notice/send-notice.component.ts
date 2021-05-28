import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send-notice',
  templateUrl: './send-notice.component.html',
  styleUrls: ['./send-notice.component.css']
})

export class SendNoticeComponent {

  topic!: string;
  text!: string;

  constructor(private _snackBar: MatSnackBar, private _router:Router, private httpClient:HttpClient){}

  send(): void {
    const data = {topic: this.topic, text: this.text};
    if (this.topic == '' || this.topic == undefined ) {
      this._snackBar.open('Ogłoszenia musi zawierać temat', 'Zamknij');
    } else if (this.text == '' || this.text == undefined) {
      this._snackBar.open('Ogłoszenia musi zawierać treść', 'Zamknij');
    } else {
      console.log(data);
      this.httpClient.post(`https://jsonplaceholder.typicode.com/comments`,
        {data}).subscribe()
      this._snackBar.open('Ogłoszenia zostało wysłane', 'Zamknij');
      this._router.navigate(['./', 'stronaGlowna']);
    }
  }
}
