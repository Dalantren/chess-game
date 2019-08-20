import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChessFieldComponent } from './chess/chess-field/chess-field.component';


const routes: Routes = [
  {
    path: 'chess',
    component: ChessFieldComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
