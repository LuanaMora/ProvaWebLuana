import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VeiculoComponent } from './cadastro/veiculo/veiculo.component';

import { MatInputModule, MatRadioModule, MatButtonModule, 
  MatTableModule, MatIconModule, MatPaginatorModule, MatSort, MatSortModule, MatExpansionModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    
    MatInputModule, //Daqui pra abaixo material
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSort,
    MatSortModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
