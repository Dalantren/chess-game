import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChessModule } from './chess/chess.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
