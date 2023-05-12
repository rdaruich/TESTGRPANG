import { Component, OnInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { UtilsService } from '../services/utils.service';
import { lastValueFrom } from 'rxjs';



@Component({
  selector: 'app-search-by-capital-city',
  templateUrl: './search-by-capital-city.component.html',
  styleUrls: ['./search-by-capital-city.component.scss']
})
export class SearchByCapitalCityComponent implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  onWrite(e: any){

    console.log("onWrite")
  }


  async llamarApi(){


    // const res = await lastValueFrom(this.utilsService.getCapital("santiago"))

  }

}
