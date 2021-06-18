import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { PasswordDashboardComponent } from "./password-dashboard/password-dashboard.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'password-dashboard',
    component: PasswordDashboardComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
