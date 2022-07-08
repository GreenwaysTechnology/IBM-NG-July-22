import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterstreamComponent } from './greeterstream.component';
import { CollectionstreamComponent } from './collectionstream.component';
import { ErrorhanlingstreamComponent } from './errorhanlingstream.component';



@NgModule({
  declarations: [
    GreeterstreamComponent,
    CollectionstreamComponent,
    ErrorhanlingstreamComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreeterstreamComponent,
    CollectionstreamComponent,
    ErrorhanlingstreamComponent
  ]
})
export class RxstreamModule { }
