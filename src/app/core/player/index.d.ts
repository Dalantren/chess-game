import { Figure } from '../figure';
import { Coords } from '../coords';

export declare class Player {
    public id: number;
    public figures: Array<Figure>;
    public isActive(): boolean;
    public action(figure: Figure, to: Coords): void;
}