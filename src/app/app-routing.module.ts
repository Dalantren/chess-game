import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChessBoardComponent } from './chess/chess-board/chess-board.component';


const routes: Routes = [
  {
    path: 'chess',
    component: ChessBoardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
