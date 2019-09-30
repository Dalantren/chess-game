import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChessComponent } from './chess.component';
import { LoggerComponent } from './logger/logger.component';
import { PlayersService } from './players.service';
import { WebSocketService } from '../web-socket.service';
import { ChessBoardService } from './chess-board.service';
import { LoggerService } from './logger.service';


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
  providers: [
    PlayersService,
    WebSocketService,
    ChessBoardService,
    LoggerService
  ],
  exports: [
    ChessBoardComponent
  ]
})
export class ChessModule { }
