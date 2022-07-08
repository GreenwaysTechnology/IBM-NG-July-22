import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alubum } from '../types/album.type';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styles: [
  ]
})
export class AlbumsComponent implements OnInit {

  //albums: Alubum[] = []
  albums!: Observable<Alubum[]>
  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
    //Getting data and bind with subscribe method
    // this.albumService.getAlbums().subscribe({
    //   next: (albums) => {
    //     this.albums = albums
    //   }
    // })
    //Getting data and without subscribe method
    this.albums = this.albumService.getAlbums()

  }
  //save method
  public save(album: Alubum) {
    this.albumService.save(album).subscribe({
      next: response => {
        console.log(response, 'saved')
      }

    })
  }

}
