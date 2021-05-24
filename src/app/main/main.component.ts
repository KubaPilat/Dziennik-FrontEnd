import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private _snackBar: MatSnackBar) {}
  logout(): void{
    this._snackBar.open('Zostałeś wylogowany', 'Zamknij', {
      duration: 5000
    });
  }

}
