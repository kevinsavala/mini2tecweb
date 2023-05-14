import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';

import { CarteleraService } from './cartelera/cartelera.service';
import { CarteleraComponent } from './cartelera/cartelera.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule
  ],
  declarations: [AppComponent, HelloComponent,
    CarteleraComponent],
  bootstrap: [AppComponent],
  providers:[CarteleraService]
})
export class AppModule {}
