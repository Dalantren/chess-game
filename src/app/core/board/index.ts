import { Injectable } from '@angular/core';
import { Coords } from '../coords';
import { Cell } from '../cell';
import { Figure } from '../figure';

@Injectable({
    providedIn: 'root'
})
export class Board {

    public width: number;
    public height: number;

    public entry: Array<Array<Cell>> = [];

    public get size() {
        return {
            width: this.width,
            height: this.height
        };
    }

    public set size(value: {width: number, height?: number}) {
        if (typeof value.height === 'undefined') {
            value.height = value.width;
        }
        this.width = value.width;
        this.height = value.height;

        for (let row = 0; row < this.width; row++) {
            this.entry[row] = new Array();
            for (let col = 0; col < this.height; col++) {
                this.entry[row].push(new Cell(new Coords(col, row), new Figure()));
            }
        }
    }
}
