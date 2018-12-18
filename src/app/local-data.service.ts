import { Injectable } from '@angular/core';

import { Artist } from './artist';
import { Track } from './track';
import { Album } from './album';

import { TRACKS } from './top-tracks-const';
import { ARTISTS } from './top-artists-const';


@Injectable({
  providedIn: 'root',
})
export class LocalDataService {

  constructor() { }

  public decodeUser() {
    return "wow";
  }

  public getTracks() {
    return TRACKS;
  }

  public getArtists() {
    return ARTISTS;
  }



  ngOnInit() {
    // this.getTracks();
    // this.g
  }

}
