import { Routes } from '@angular/router';
import { ChessComponent } from './chess/chess.component';
import { HomePageComponent } from './home-page/home-page.component';


export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'chess/:roomId',
    component: ChessComponent,
  }
];
