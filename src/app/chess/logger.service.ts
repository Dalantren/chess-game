import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    public logs: Array<string> = [];

    constructor() { }

    public log(message: string): void {
        this.logs.push(message);
    }

}
