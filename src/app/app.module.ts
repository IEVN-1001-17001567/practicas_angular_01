import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplicacionAxBComponent } from './practicas/multiplicacion-ax-b/multiplicacion-ax-b.component';
import { TemperaturaComponent } from './practicas/temperatura/temperatura.component';
import { MaterialModule } from './material/material/material.module';
import { MenuComponent } from './menu/menu/menu.component';
import { CinepolisComponent } from './practicas/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplicacionAxBComponent,
    TemperaturaComponent,
    MenuComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
