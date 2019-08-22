import { Figure } from '../figure';
import { Cell } from '../cell';

export declare class Player {
    public id: number;
    public figures: Array<Figure>;
    public isActive(): boolean;
    public action(figure: Figure, to: Cell): void;
}