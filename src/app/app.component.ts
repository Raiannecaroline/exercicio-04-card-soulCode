import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio-04-Eventos';

  constructor(private _snackBar: MatSnackBar) {}
    buttonSnackBar(){
      this._snackBar.open('Pacote Adquirido!! Parabéns!!')
    }
}