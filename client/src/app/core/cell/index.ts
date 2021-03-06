import { Figure } from '../figure';

export declare interface Coords {
    x: number;
    y: number;
}

export class Cell {

    private xLet: string;
    private yLet: string;

    private xNum: number;
    private yNum: number;

    public availible = false;

    constructor(x: number | string, y: number | string) {
        this.x = x;
        this.y = y;
    }

    private _figure: Figure = null;

    public get figure(): Figure {
        return this._figure;
    }

    public set figure(fig: Figure | null) {
        if (fig !== null) {
            fig.coords = this.coords;
        }
        this._figure = fig;
    }

    get x() {
        return this.xNum;
    }

    set x(value: any) {
        if (typeof value === 'number') {
            this.xLet = String.fromCharCode(97 + value).toUpperCase();
            this.xNum = value;
        } else if (typeof value === 'string') {
            this.xLet = value.toUpperCase();
            this.xNum = value.charCodeAt(0) - 97;
        }
    }

    get y() {
        return this.yNum;
    }

    set y(value: any) {
        if (typeof value === 'number') {
            this.yLet = String.fromCharCode(97 + value).toUpperCase();
            this.yNum = value;
        } else if (typeof value === 'string') {
            this.yLet = value.toUpperCase();
            this.yNum = value.charCodeAt(0) - 97;
        }
    }

    get xLetter(): string {
        return this.xLet;
    }

    get yLetter(): string {
        return this.yLet;
    }

    get coords(): Coords {
        return { x: this.x, y: this.y };
    }

    get isBlack(): boolean {
        return (this.x + this.y) % 2 === 0;
    }
}
