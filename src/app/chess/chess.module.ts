import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChessComponent } from './chess.component';
import { LoggerComponent } from './logger/logger.component';


@NgModule({
  declarations: [
    ChessBoardComponent,
    ChessComponent,
    LoggerComponent
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
