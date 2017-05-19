import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../services/spotify.service';

import { Artist } from '../models/artist.model';
import { Album } from '../models/album.model';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [SpotifyService]
})
export class AlbumComponent implements OnInit {

  id: string;
  album: Album;
  isLoading = true;

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
        .map(params => params['id'])
        .subscribe(id => {
          this.spotifyService.getAlbum(id)
              .subscribe(album => {
                this.album = album;
                this.isLoading = false;
              });

        })
  }

}
