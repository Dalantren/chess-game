import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChessComponent } from './chess.component';
import { LoggerComponent } from './logger/logger.component';
import { PlayersService } from './services/players.service';
import { SocketService } from '../socket.service';
import { ChessBoardService } from './services/chess-board.service';
import { LoggerService } from './services/logger.service';
import { FelledFiguresComponent } from './felled-figures/felled-figures.component';


@NgModule({
  declarations: [
    ChessBoardComponent,
    ChessComponent,
    LoggerComponent,
    FelledFiguresComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  providers: [
    PlayersService,
    ChessBoardService,
    LoggerService
  ],
  exports: [
    ChessBoardComponent
  ]
})
export class ChessModule { }
