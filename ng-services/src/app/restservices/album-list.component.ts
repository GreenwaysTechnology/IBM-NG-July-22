import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alubum } from '../types/album.type';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styles: [
  ]
})
export class AlbumListComponent implements OnInit {
  @Input()
  albums!:Observable<Alubum[]>
  constructor() { }

  ngOnInit(): void {

  }

}
