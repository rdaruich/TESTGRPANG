import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCapitalCityComponent } from './search-by-capital-city.component';

describe('SearchByCapitalCityComponent', () => {
  let component: SearchByCapitalCityComponent;
  let fixture: ComponentFixture<SearchByCapitalCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByCapitalCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByCapitalCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
