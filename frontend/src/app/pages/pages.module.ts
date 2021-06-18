import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';

import { SharedModule } from '../shared/shared.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ExtendedModule, FlexModule, GridModule } from '@angular/flex-layout';
import { RegistrationComponent } from './registration/registration.component';




@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
    imports: [
        CommonModule,
        SharedModule,
        FlexModule,
        GridModule,
        ExtendedModule,

        // Forms
        ReactiveFormsModule,

        // Routing
        PagesRoutingModule,
        FormsModule,
    ],
})
export class PagesModule {}
