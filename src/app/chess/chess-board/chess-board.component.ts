import { Component, OnInit } from '@angular/core';
import { ChessBoardService } from '../chess-board.service';
import { PlayersService } from '../players.service';

@Component({
    selector: 'app-chess-board',
    templateUrl: './chess-board.component.html',
    styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {

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
}
