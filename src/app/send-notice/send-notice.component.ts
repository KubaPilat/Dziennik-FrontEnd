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

  constructor(private _snackBar: MatSnackBar, private _router:Router) {}


  send(): void{
    const data =  {topic: this.topic, text: this.text};
    if (this.topic == '' || this.topic == undefined){
      this._snackBar.open('Ogłoszenie musi zawierać temat', 'Zamknij',{
        duration: 5000
      });
    } else if (this.text == '' || this.text == undefined ){
      this._snackBar.open('Ogłoszenie musi zawierać treść', 'Zamknij',{
        duration: 5000
      });
    }else{
      console.log(data);
      this._snackBar.open('Ogłoszenie zostało wysłane', 'Zamknij',{
        duration: 5000
      });
      this._router.navigate(['./', 'stronaGlowna']);
    }
  }
}
