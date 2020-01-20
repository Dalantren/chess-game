import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChessModule } from './chess/chess.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { HomePageComponent } from './home-page/home-page.component';

const serverConfig: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    SocketIoModule.forRoot(serverConfig),
    BrowserModule,
    AppRoutingModule,
    ChessModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
