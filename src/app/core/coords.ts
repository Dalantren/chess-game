import { CoordsType } from './coords.d';

export class Coords implements CoordsType {
    public y: number;
    private xLit: string;
    private xNum: number;

    set x(value: any) {
        if (typeof value === 'number') {
           this.xLit = String.fromCharCode(97 + value).toUpperCase();
           this.xNum = value;
        } else if (typeof value === 'string') {
            this.xLit = value.toUpperCase();
            this.xNum = value.charCodeAt(0) - 97;
        }
    }

    get x() {
        return this.xLit;
    }

    get xCoord() {
        return this.xNum;
    }

    constructor(x: number | string, y: number) {
        this.x = x;
        this.y = y;
    }
}
