import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByCapitalCityComponent } from './search-by-capital-city/search-by-capital-city.component';
import { SearchByCountryComponent } from './search-by-country/search-by-country.component';

const routes: Routes = [
  {
    path: "searchByCapital",
    component: SearchByCapitalCityComponent
  },
  {
    path: "searchByContry",
    component: SearchByCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
