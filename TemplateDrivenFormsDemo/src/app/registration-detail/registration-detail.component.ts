import { Component, OnInit, Input } from '@angular/core';
import { Registration } from '../registration-entry/registration.model';

@Component({
  selector: 'app-registration-detail',
  templateUrl: './registration-detail.component.html',
  styleUrls: ['./registration-detail.component.css']
})
export class RegistrationDetailComponent implements OnInit {

  @Input()
  registration : Registration;

  constructor() { }

  ngOnInit() {
  }

}
