import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {
  @Input() inputText: string = ''
  @Input() searchResponse: Country[] = [];
  @Input() searchInput: string = '';
  @Input() fetchingResponse: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
