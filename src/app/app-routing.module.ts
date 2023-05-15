import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByCountryComponent } from './modules/country/components/search-by-country/search-by-country.component';
import { SearchByCapitalCityComponent } from './modules/country/components/search-by-capital-city/search-by-capital-city.component';
import { CountryModule } from './modules/country/country.module';

const routes: Routes = [
  {
    path: "",
    component: SearchByCountryComponent,
  },
  {
    path: "country",
    loadChildren: () => import('./modules/country/country.module').then(m => m.CountryModule)
  },
  {
    path: "**",
    component: SearchByCountryComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
