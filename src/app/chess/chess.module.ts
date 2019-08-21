import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessBoardComponent } from './chess-board/chess-board.component';



@NgModule({
  declarations: [
    ChessBoardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ChessBoardComponent
  ]
})
export class ChessModule { }
