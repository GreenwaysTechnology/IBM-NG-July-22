import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { RxstreamModule } from './rxstream/rxstream.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    RxstreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
