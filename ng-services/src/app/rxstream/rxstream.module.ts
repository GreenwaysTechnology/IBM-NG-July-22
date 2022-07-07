import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterstreamComponent } from './greeterstream.component';
import { CollectionstreamComponent } from './collectionstream.component';



@NgModule({
  declarations: [
    GreeterstreamComponent,
    CollectionstreamComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreeterstreamComponent,
    CollectionstreamComponent
  ]
})
export class RxstreamModule { }
