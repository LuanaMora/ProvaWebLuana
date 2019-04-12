import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VeiculoComponent } from './cadastro/veiculo/veiculo.component';

import { MatInputModule, MatRadioModule, MatButtonModule, 
  MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule, MatExpansionModule, MatSelectModule } from '@angular/material';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 

    MatInputModule,
    MatRadioModule,
    MatButtonModule, 
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient], //Adicionei aqui (icone)
  bootstrap: [AppComponent]
})
export class AppModule { }
