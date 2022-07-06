import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MydirectiveComponent } from './mydirective.component';
import { FormsModule } from '@angular/forms';
import { MyattributedirectiveComponent } from './myattributedirective.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    MydirectiveComponent,
    MyattributedirectiveComponent,
    HighlightDirective
  ],
  imports: [
   CommonModule,FormsModule
  ],
  exports: [
    MydirectiveComponent,
    MyattributedirectiveComponent,
    HighlightDirective
  ]
})
export class DirectivesModule { }
