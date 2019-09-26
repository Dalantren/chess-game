import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessComponent } from './chess/chess.component';


const routes: Routes = [
  {
    path: 'chess',
    component: ChessComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
