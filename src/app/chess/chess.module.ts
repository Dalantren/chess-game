import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    ChessBoardComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    ChessBoardComponent
  ]
})
export class ChessModule { }
