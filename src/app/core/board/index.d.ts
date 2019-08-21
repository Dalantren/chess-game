import { Cell } from '../cell';

export declare class Board {

    constructor(width: number, height: number);

    protected width: number;
    protected height: number;

    public size(): { width: number, height: number };

    public entry: Array<Array<Cell>>;
}
