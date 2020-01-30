import { Injectable } from '@angular/core';
import { Cell } from '../../core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    public logs: Array<string> = [];

    constructor() { }

    public log(message: string): void {
        this.logs.push(message);
    }

    public logMove(from: Cell, to: Cell) {
        this.logs.push(`${to.figure.icon} ${from.xLetter}${from.y + 1} - ${to.xLetter}${to.y + 1}`);
    }

}
