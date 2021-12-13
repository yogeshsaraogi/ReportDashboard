import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MaterialComponentsModule} from './material-components/material-components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsCheckComponent } from './details-check/details-check.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailsCheckComponent,
    WeatherInfoComponent,
    DeliveryInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    FontAwesomeModule,
    HighchartsChartModule,
    NgCircleProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
