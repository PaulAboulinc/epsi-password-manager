import { Component, OnInit } from '@angular/core';

import { User } from '../../models/models'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user : User = {
    email : "",
    password : "",
    firstName : "",
    lastName : "",
    age : 18,
    company : "",
  };

  constructor() { }

  ngOnInit(): void {
    
  }

  registrate(user) : any{
    console.log(user);
    
  }

}
