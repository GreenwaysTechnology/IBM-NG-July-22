import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { SkillschildComponent } from './skillschild.component';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    SkillschildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentComponent,
    ChildComponent,
    SkillschildComponent
  ]
})
export class PropsbindingModule { }
