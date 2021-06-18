import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
