import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  selectedState  = {};
  selectedCity = {};

  stateList : any[] = [
    {
      code : 'MH',
      desc : 'Maharashtra'
    },
    {
      code : 'GJ',
      desc : 'Gujrat'
    },
    {
      code : 'MP',
      desc : 'Madhya Pradesh'
    }
  ];

  cityList : any[] = [
    {
      code : 'SRT',
      desc : 'surat'
    },
    {
      code : 'PN',
      desc : 'Pune'
    },
    {
      code : 'IND',
      desc : 'Indore'
    }
  ]

  constructor() { }

  ngOnInit() {
    this.selectedState = this.stateList[1];
    this.selectedCity = this.cityList[0];
  }

  getState(state) : void {
    this.selectedState = state;
  }

  getCity(city) : void {
    this.selectedCity = city;
  }
}
