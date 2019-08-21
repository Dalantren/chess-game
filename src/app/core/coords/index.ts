export class Coords {
    private xLet: string;
    private yLet: string;

    private xNum: number;
    private yNum: number;

    constructor(x: number | string, y: number | string) {
        this.x = x;
        this.y = y;
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

    set y(value: any) {
        if (typeof value === 'number') {
            this.yLet = String.fromCharCode(97 + value).toUpperCase();
            this.yNum = value;
        } else if (typeof value === 'string') {
            this.yLet = value.toUpperCase();
            this.yNum = value.charCodeAt(0) - 97;
        }
    }

    get x() {
        return this.xNum;
    }

    get y() {
        return this.yNum;
    }

    get xLetter(): string {
        return this.xLet;
    }

    get yLetter(): string {
        return this.yLet;
    }

    get coords() {
        return {x: this.x, y: this.y};
    }
}
