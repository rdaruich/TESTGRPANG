import { Component, OnInit } from '@angular/core';
import { RestCountriesService } from '../../services/services/rest-countries.service';
import { Country } from '../../interfaces/country';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-search-by-capital-city',
  templateUrl: './search-by-capital-city.component.html',
  styleUrls: ['./search-by-capital-city.component.scss']
})
export class SearchByCapitalCityComponent implements OnInit {

  searchInput: string = '';
  searchByCapitalCityResponse: Country[] = []
  fetchingCapitalCityResponse = false

  constructor(private restCountriesService: RestCountriesService) { }

  ngOnInit(): void {
  }

  async onInputChange(searchInput: string) {
    this.searchInput = searchInput
    this.searchByCapitalCityResponse = []
    this.fetchingCapitalCityResponse = true

    try {  
      if(searchInput != ''){
        this.searchByCapitalCityResponse = await lastValueFrom(this.restCountriesService.getByCapital(searchInput));
      }
    } catch (error) {
      console.error('Ocurrió un error:', error);
    }

    this.fetchingCapitalCityResponse = false
  }

}
