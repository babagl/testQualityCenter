import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { VenteComponent } from './vente/vente.component';
import {  HttpClientModule } from '@angular/common/http';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDropDownButtonModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxChartModule
} from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    VenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
    DxDropDownButtonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
