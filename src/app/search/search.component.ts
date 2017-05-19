import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../services/spotify.service';

import { Artist } from '../models/artist.model';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {

  searchStr: string;
  searchRes: Artist[];

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    var searchInput = Rx.Observable.fromEvent(document.getElementById("searchArtists"), "keyup");
    searchInput.debounceTime(400)
               .subscribe(() => {
                 this.spotifyService.searchMusic(this.searchStr)
                     .subscribe(res => {
                       this.searchRes = res.artists.items;
                     })
               })
  }

}
