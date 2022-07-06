import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyparentComponent } from './myparent.component';
import { MychildComponent } from './mychild.component';



@NgModule({
  declarations: [
    MyparentComponent,
    MychildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyparentComponent,
    MychildComponent
  ]
})
export class CustomeventsModule { }
