import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchByCountryComponent } from './search-by-country/search-by-country.component';
import { SearchByCapitalCityComponent } from './search-by-capital-city/search-by-capital-city.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { HttpClient } from '@angular/common/http';
// import { MatFormField } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    SearchByCountryComponent,
    SearchByCapitalCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    // MatFormField 
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
