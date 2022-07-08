import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AlbumformComponent } from './albumform.component';
import { AlbumListComponent } from './album-list.component';



@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumformComponent,
    AlbumListComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  exports: [
    AlbumsComponent,
    AlbumformComponent,
    AlbumListComponent
  ]
})
export class RestservicesModule { }
