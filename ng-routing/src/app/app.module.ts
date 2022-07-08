import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { PagenotfoundComponent } from './pagenotfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlbumModule } from './album/album.module';
import { AlbumsInterceptor } from './album/albums.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlbumModule,
    HomeModule,
    ContactModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AlbumsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [
    PagenotfoundComponent
  ]
})
export class AppModule { }
