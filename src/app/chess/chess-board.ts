import { Injectable } from '@angular/core';
import { Board } from '../core/board';
import { Bishop } from './figures/bishop';

@Injectable({
    providedIn: 'root'
})
export class ChessBoardService extends Board {

    public initFigures() {
        if (!this.entry.length) {
            return;
        }
        this.entry.map( row => {
            row.map( cell => {
                let player = 0 ;
                console.log(cell.coordinates);
                if ([2, 5].indexOf(cell.coordinates[0]) >= 0 && cell.coordinates[1] === 0) {
                    player = 1;
                    console.log('aa');
                }
                if ([2, 5].indexOf(cell.coordinates[0]) >= 0 && cell.coordinates[1] === 7) {
                    player = 2;
                }
                if (player) {
                    cell.figure = new Bishop(this, cell.coords, player);
                }
            });
        });
        console.log(this.entry);
    }
}
