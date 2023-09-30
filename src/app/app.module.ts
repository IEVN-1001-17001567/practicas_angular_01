import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplicacionAxBComponent } from './practicas/multiplicacion-ax-b/multiplicacion-ax-b.component';
import { TemperaturaComponent } from './practicas/temperatura/temperatura.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplicacionAxBComponent,
    TemperaturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
