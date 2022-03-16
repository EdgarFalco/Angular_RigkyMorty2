import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DetallestarjetaComponent } from './detallestarjeta/detallestarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    TarjetaComponent,
    AcercadeComponent,
    HomeComponent,
    DetallestarjetaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
