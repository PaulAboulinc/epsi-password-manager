import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';

import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ExtendedModule, FlexModule, GridModule } from '@angular/flex-layout';




@NgModule({
  declarations: [LoginComponent],
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
  ],
})
export class PagesModule {}
