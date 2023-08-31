import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaberintoComponent } from './laberinto/laberinto.component';
import { NivelComponent } from './nivel/nivel.component';

@NgModule({
  declarations: [
    AppComponent,
    LaberintoComponent,
    NivelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
