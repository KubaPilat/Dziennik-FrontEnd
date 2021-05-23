import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-send-notice',
  templateUrl: './send-notice.component.html',
  styleUrls: ['./send-notice.component.css']
})
export class SendNoticeComponent {

  topic!: string;
  text!: string;
  router: any;

  constructor(private _snackBar: MatSnackBar) {}

  send(): void{
    const data =  {topic: this.topic, text: this.text};
    // tslint:disable-next-line:triple-equals
    if (this.topic == '' || this.topic == undefined){
      this._snackBar.open('Ogłoszenie musi zawierać temat', 'Zamknij');
      // tslint:disable-next-line:triple-equals
    } else if (this.text == '' || this.text == undefined ){
      this._snackBar.open('Ogłoszenie musi zawierać treść', 'Zamknij');
    }else{
      console.log(data);
      this._snackBar.open('Ogłoszenie zostało wysłane', 'Zamknij');
      // this.router.navigate(['/stronaGlowna']);
      // Zapytac Mateusza a routing w angularze
    }
  }
}
