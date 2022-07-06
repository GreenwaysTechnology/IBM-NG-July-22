import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationModule } from './interpolation/interpolation.module';
import { AttributebindingModule } from './attributebinding/attributebinding.module';
import { PropsbindingModule } from './propsbinding/propsbinding.module';
import { EventbindingModule } from './eventbinding/eventbinding.module';
import { CustomeventsModule } from './customevents/customevents.module';
import { TemplatereferenceModule } from './templatereference/templatereference.module';
import { DynamiccssModule } from './dynamiccss/dynamiccss.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InterpolationModule,
    AttributebindingModule,
    PropsbindingModule,
    EventbindingModule,
    CustomeventsModule,
    TemplatereferenceModule,
    DynamiccssModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
