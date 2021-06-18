import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router) {}

  email : string = "";
  password : string = "";

  async ngOnInit(): Promise<void> {
    // if (this.authService.isAuthenticated()) {
    //   await this.router.navigate(['/dashboard']);
    // }
  }

  loginNetwork(email, password): any {
    console.log(email)
    console.log(password)
  }

  navigateToCreateAccount():any{
    this.router.navigate(['/registration'])
  }
}
