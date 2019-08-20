import { Component, OnInit } from '@angular/core';
import { ChessField } from '../chess-field';

@Component({
  selector: 'app-chess-field',
  templateUrl: './chess-field.component.html',
  styleUrls: ['./chess-field.component.scss']
})
export class ChessFieldComponent implements OnInit {
  public field: ChessField;

  constructor() { }

  ngOnInit() {
    this.field = new ChessField(8, 8);
  }
}
