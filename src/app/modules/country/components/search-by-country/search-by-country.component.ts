import { Component, OnInit } from '@angular/core';
import { RestCountriesService } from '../../services/services/rest-countries.service';
import { lastValueFrom } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-search-by-country',
  templateUrl: './search-by-country.component.html',
  styleUrls: ['./search-by-country.component.scss']
})
export class SearchByCountryComponent implements OnInit {

  searchInput: string = '';
  searchByCountryResponse: Country[] = []
  fetchingCountryResponse = false

  constructor(private restCountriesService: RestCountriesService) { }

  ngOnInit(): void {
  }

  async onInputChange(searchInput: string) {
    this.searchInput = searchInput
    this.searchByCountryResponse = []
    this.fetchingCountryResponse = true

    try {  
      if(searchInput != ''){
        this.searchByCountryResponse = await lastValueFrom(this.restCountriesService.getByCountry(searchInput));
      }
    } catch (error) {
      console.error('Ocurrió un error:', error);
    }

    this.fetchingCountryResponse = false
  }
  
}
