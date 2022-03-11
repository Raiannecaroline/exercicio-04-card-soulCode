import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  @Input()
  titulo: string = ''

  @Input()
  valores: string = ''

  @Input()
  tamanhoArmazenamento: string = ''

  @Input()
  usuarios: string = ''

  @Input()
  sendArmazenamento: string = ''

  @Input()
  planos: string = 'card'

  @Output()
  eventButton: EventEmitter<any> = new EventEmitter<any>()

  buttonEvent(): void{
    this.eventButton.emit()
  }

  constructor(private _snackBar: MatSnackBar){}

  buttonSnackBar(message: string, action: string): void{
    this._snackBar.open(message, action)
  }

}
