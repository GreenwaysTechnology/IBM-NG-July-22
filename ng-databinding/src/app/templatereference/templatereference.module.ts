import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatereferenceComponent } from './templatereference.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplatereferenceComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    TemplatereferenceComponent
  ]
})
export class TemplatereferenceModule { }
