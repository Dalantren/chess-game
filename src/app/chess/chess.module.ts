import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessFieldComponent } from './chess-field/chess-field.component';



@NgModule({
  declarations: [
    ChessFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChessFieldComponent
  ]
})
export class ChessModule { }
