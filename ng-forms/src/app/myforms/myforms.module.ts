import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatedrivenComponent } from './templatedriven.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TemplatedrivenComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    TemplatedrivenComponent
  ]
})
export class MyformsModule { }
