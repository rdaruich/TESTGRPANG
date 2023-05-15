import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCapitalCityComponent } from './search-by-capital-city.component';
import { HttpClientModule } from '@angular/common/http';
import { RestCountriesService } from '../../services/services/rest-countries.service';
import { Country } from '../../interfaces/country';
import { of } from 'rxjs';

describe('SearchByCapitalCityComponent', () => {
  let component: SearchByCapitalCityComponent;
  let fixture: ComponentFixture<SearchByCapitalCityComponent>;
  let restCountriesService: RestCountriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByCapitalCityComponent ],
      providers: [RestCountriesService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByCapitalCityComponent);
    component = fixture.componentInstance;
    restCountriesService = TestBed.inject(RestCountriesService);
    fixture.detectChanges();
  });

  it('should call getByCapitalCity with a correct capital name and update searchByCapitalCityResponse variable', async () => {
    const searchInput = 'Santiago';
    const response: Country[] = [
      {
        capital: ['Santiago'],
        flag: '🇨🇱',
        name: { common: 'Santiago' },
        population: 19116209
      }
    ];

    spyOn(restCountriesService, 'getByCapital').and.returnValue(of(response));
    component.onInputChange(searchInput);
    await fixture.whenStable();


    expect(restCountriesService.getByCapital).toHaveBeenCalledTimes(1);
    expect(restCountriesService.getByCapital).toHaveBeenCalledWith(searchInput);
    expect(component.searchByCapitalCityResponse).toEqual(response);
    expect(component.fetchingCapitalCityResponse).toEqual(false);
    expect(component.searchInput).toEqual(searchInput);
  });


  it(`should'nt call getByCapital function when searchInput is a empty string`, async () => {
    const searchInput = '';

    spyOn(restCountriesService, 'getByCapital')
    spyOn(console, 'error');

    component.onInputChange(searchInput);
    await fixture.whenStable();

    expect(restCountriesService.getByCapital).toHaveBeenCalledTimes(0);
    expect(component.searchByCapitalCityResponse).toEqual([]);
    expect(component.fetchingCapitalCityResponse).toEqual(false);
    expect(component.searchInput).toEqual(searchInput);
  });

  it(`should handle error when getByCapital function is called with non-existent capital`, async () => {
    const searchInput = 'Silent Hill';
    const error =  new Error('Algo salió mal. Por favor, intenta nuevamente más tarde.');

    spyOn(restCountriesService, 'getByCapital').and.throwError(error);
    spyOn(console, 'error');

    component.onInputChange(searchInput);
    await fixture.whenStable();

    expect(restCountriesService.getByCapital).toHaveBeenCalledTimes(1);
    expect(component.searchByCapitalCityResponse).toEqual([]);
    expect(component.fetchingCapitalCityResponse).toEqual(false);
    expect(component.searchInput).toEqual(searchInput);
  });


});
