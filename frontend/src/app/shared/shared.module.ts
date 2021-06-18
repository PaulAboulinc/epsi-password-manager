import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { FlexModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, FlexModule, RouterModule],
  exports: [MaterialModule],
})
export class SharedModule {}
