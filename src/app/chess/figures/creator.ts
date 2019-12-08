import { Figure, FiguresCreator, Coords, ChessColors } from '../../core';
import { Rook, Pawn, Bishop, King, Knight, Queen } from './figures';
export class ChessFiguresCreator extends FiguresCreator {

    create(name: string, color: ChessColors, coords: Coords): Figure {
        switch (name.toLowerCase()) {
            case 'pawn':
                return new Pawn(color, coords);
            case 'bishop':
                return new Bishop(color, coords);
            case 'king':
                return new King(color, coords);
            case 'knight':
                return new Knight(color, coords);
            case 'queen':
                return new Queen(color, coords);
            case 'rook':
                return new Rook(color, coords);
        }
    }
}