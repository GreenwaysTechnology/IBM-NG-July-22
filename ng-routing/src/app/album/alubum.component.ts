import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { Observable } from 'rxjs';
import { Alubum } from '../types/album.type';

@Component({
  selector: 'app-alubum',
  templateUrl: './alubum.component.html',
  styles: [
  ]
})
export class AlubumComponent implements OnInit {
  albums!: Observable<Alubum[]>
  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.albums=this.albumService.getAlbums()
  }

}
