import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Alubum } from '../types/album.type';
import { AlubumEntity } from './album.model';

@Component({
  selector: 'app-albumform',
  templateUrl: './albumform.component.html',
  styles: [
  ]
})
export class AlbumformComponent implements OnInit {
  album!: Alubum

  //eventEmitter
  @Output()
  onAlbum = new EventEmitter<Alubum>()

  constructor() {
    this.album = new AlubumEntity(0, 0, 'Bar')
  }

  ngOnInit(): void {
  }
  public onSubmit() {
    this.onAlbum.emit(this.album)
  }

}
