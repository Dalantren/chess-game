import { Injectable } from '@angular/core';
import { Cell } from '../core/cell';
import { Figure } from '../core/figure';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    public logs: Array<string> = [];

    constructor() { }

    public log(message: string): void {
        this.logs.push(message);
    }

    public logMove(from: Cell, to: Cell, figure: Figure) {
        this.logs.push(`${figure.icon} ${from.xLetter}${from.y} - ${to.xLetter}${to.y}`);
    }

}
