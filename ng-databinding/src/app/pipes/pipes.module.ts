import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe.component';
import { DecimalfractionPipe } from './decimalfraction.pipe';


@NgModule({
  declarations: [
      DecimalfractionPipe,PipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      DecimalfractionPipe,PipeComponent
  ]
})
export class PipesModule { }
