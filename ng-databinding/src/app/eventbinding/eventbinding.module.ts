import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    EventsComponent
  ]
})
export class EventbindingModule { }
