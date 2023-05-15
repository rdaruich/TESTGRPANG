import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByCountryComponent } from './components/search-by-country/search-by-country.component';
import { SearchByCapitalCityComponent } from './components/search-by-capital-city/search-by-capital-city.component';
import { CountryFormComponent } from './components/country-form/country-form.component';

const routes: Routes = [
  {
    path: "searchByCountry",
    component: SearchByCountryComponent,
  },
  {
    path: "searchByCapitalCity",
    component: SearchByCapitalCityComponent,
  },
  {
    path: "countryForm",
    component: CountryFormComponent,
  },
  {
    path: '',
    redirectTo: 'searchByCountry',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'searchByCountry',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
