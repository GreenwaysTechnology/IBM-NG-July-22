import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alubum } from '../types/album.type';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-alubum-details-component',
  templateUrl: './alubum-details-component.component.html',
  styles: [
  ]
})
export class AlubumDetailsComponent implements OnInit {

  params!: any
  album!: Alubum
  constructor(private router:Router,private routeInfo: ActivatedRoute, private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.routeInfo.params.subscribe(params => {
      //console.log(params)
      this.params = params
      //make api call
      this.albumService.getAlbumsById(parseInt(this.params.id)).subscribe(alubum => {
        console.log(alubum)
        this.album = alubum
      })

    })

  }
  navigateTo(){
    //programmtic navigation
    this.router.navigate(['myablums/albums'])
  }

}
