import { Coords } from '../coords';
import { Figure } from '../figure';

export declare class CellType {
    public coords: Coords;
    public coordinates: Array<[number, number]>;
    public figure: Figure;
    public isBlack(): boolean;
}
