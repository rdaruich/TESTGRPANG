import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchByCountryComponent } from './search-by-country.component';
import { RestCountriesService } from '../../services/services/rest-countries.service';
import { of } from 'rxjs';
import { Country } from '../../interfaces/country';
import { HttpClientModule } from '@angular/common/http';

describe('SearchByCountryComponent', () => {
  let component: SearchByCountryComponent;
  let fixture: ComponentFixture<SearchByCountryComponent>;
  let restCountriesService: RestCountriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchByCountryComponent],
      providers: [RestCountriesService],
      imports: [HttpClientModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByCountryComponent);
    component = fixture.componentInstance;
    restCountriesService = TestBed.inject(RestCountriesService);
    fixture.detectChanges();
  });

  it('should call getByCountry with a correct country name and update searchByCountryResponse variable', async () => {
    const searchInput = 'Chile';
    const response: Country[] = [
      {
        capital: ['Santiago'],
        flag: '🇨🇱',
        name: { common: 'Santiago' },
        population: 19116209
      }
    ];

    spyOn(restCountriesService, 'getByCountry').and.returnValue(of(response));

    component.onInputChange(searchInput);
    await fixture.whenStable();

    expect(restCountriesService.getByCountry).toHaveBeenCalledTimes(1);
    expect(restCountriesService.getByCountry).toHaveBeenCalledWith(searchInput);
    expect(component.searchByCountryResponse).toEqual(response);
    expect(component.fetchingCountryResponse).toEqual(false);
    expect(component.searchInput).toEqual(searchInput);
  });

  it(`should'nt call getByCountry function when searchInput is a empty string`, async () => {
    const searchInput = '';

    spyOn(restCountriesService, 'getByCountry')
    spyOn(console, 'error');

    component.onInputChange(searchInput);
    await fixture.whenStable();

    expect(restCountriesService.getByCountry).toHaveBeenCalledTimes(0);
    expect(component.searchByCountryResponse).toEqual([]);
    expect(component.fetchingCountryResponse).toEqual(false);
    expect(component.searchInput).toEqual(searchInput);
  });


  it(`should handle error when getByCountry function is called with non-existent country`, async () => {
    const searchInput = 'Azeroth';
    const error =  new Error('Algo salió mal. Por favor, intenta nuevamente más tarde.');

    spyOn(restCountriesService, 'getByCountry').and.throwError(error);
    spyOn(console, 'error');

    component.onInputChange(searchInput);
    await fixture.whenStable();

    expect(restCountriesService.getByCountry).toHaveBeenCalledTimes(1);
    expect(component.searchByCountryResponse).toEqual([]);
    expect(component.fetchingCountryResponse).toEqual(false);
    expect(component.searchInput).toEqual(searchInput);
  });

});
