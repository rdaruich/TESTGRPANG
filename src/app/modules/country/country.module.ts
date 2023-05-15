import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { SearchByCapitalCityComponent } from './components/search-by-capital-city/search-by-capital-city.component';
import { SearchByCountryComponent } from './components/search-by-country/search-by-country.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryFormComponent } from './components/country-form/country-form.component';
import { InputFileComponent } from './components/input-file/input-file.component';


@NgModule({
  declarations: [CountryTableComponent, InputTextComponent, SearchByCapitalCityComponent, SearchByCountryComponent, CountryFormComponent, InputFileComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class CountryModule { }
