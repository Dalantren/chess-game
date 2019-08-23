import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChessBoardService } from '../chess-board.service';
import { PlayersService } from '../players.service';

@Component({
    selector: 'app-chess-board',
    templateUrl: './chess-board.component.html',
    styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit, OnChanges {

    constructor(private board: ChessBoardService, private players: PlayersService) {
        this.board.startGame();
    }

    ngOnInit() {
        // const PLAYERS_COUNT = 2;
        // // this.board.size = {width: 8, height: 8};
        // for (let i = 0; i < PLAYERS_COUNT; i++) {
        //     this.players.add();
        // }
    }


    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        console.log(this.board);
    }

    drop(event: CdkDragDrop<string[]>) {
        console.log(event);
        console.log(this.board);
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
        }
      }
}
