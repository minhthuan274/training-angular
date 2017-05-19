import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../models/artist.model';
import { Album } from '../models/album.model';

import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist;
  albums: Album[];
  isLoading = false;

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
        .map(params => params['id'])
        .subscribe(id => {
          this.spotifyService.getArtist(id)
              .subscribe(artist => {
                this.isLoading = true;
                this.artist = artist;
              });
          this.spotifyService.getAlbums(id)
              .subscribe(albums => {
                this.albums = albums.items;
              })
        });
  }

}
