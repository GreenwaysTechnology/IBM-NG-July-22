import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlubumComponent } from './alubum.component';
import { HttpClientModule } from '@angular/common/http';
import { AlubumDetailsComponent } from './alubum-details-component.component';


@NgModule({
  declarations: [
    AlubumComponent,
    AlubumDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AlbumRoutingModule
  ],
  exports: [
    AlubumComponent,
    AlubumDetailsComponent
  ]
})
export class AlbumModule { }
