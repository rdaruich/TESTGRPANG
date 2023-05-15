import { TestBed } from '@angular/core/testing';

import { RestCountriesService } from './rest-countries.service';
import { HttpClientModule } from '@angular/common/http';

describe('RestCountriesService', () => {
  let service: RestCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(RestCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
