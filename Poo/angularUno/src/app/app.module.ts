import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { videoJuegoComponent } from './videoJuego/videoJuego.component';
import { zapatillasComponent } from './zapatillasNuevoComponentes/zapatillas.component';
import { CursoComponent } from './curso/curso.component'

@NgModule({
  declarations: [
    AppComponent,
    videoJuegoComponent,
    zapatillasComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
