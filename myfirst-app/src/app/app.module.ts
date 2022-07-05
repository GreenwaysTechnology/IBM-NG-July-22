/**
 * Angular Module is nothing but Object called container object which other objects
 * Other objects could be another module(sub module) , components,directives,services,pipes...
 * Every Angular apps must have one single root module object/app module object
 * How to create module object?
 * Steps:
 * 1.declare class and export them
 * 2.decorate with @NgModule
 * 3.pass decorator meta data.
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer.component";
import { HeaderComponent } from "./header.component";
import { MenuBar } from "./menu.component";

@NgModule({
  //DI parameters- for which class ng need to create objects
  declarations: [AppComponent, HeaderComponent, FooterComponent,MenuBar], //View Objects : components,directives,Pipes
  imports: [
    BrowserModule   //all sub module objects blong to this main module
  ],
  providers: [], // all service objects,
  bootstrap: [AppComponent] //Which is entry component.App component is entry

})
export class AppModule { }

