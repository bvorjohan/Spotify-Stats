import { Component, OnInit } from '@angular/core';

// import {MatIconRegistry} from '@angular/material';
// import {DomSanitizer} from '@angular/platform-browser';

import { Artist } from '../artist';
import { LocalDataService } from '../local-data.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  artists: Artist[];

  constructor(
    private localDataService: LocalDataService
    // ,
    // iconRegistry: MatIconRegistry,
    // sanitizer: DomSanitizer
  ) {
    // iconRegistry.addSvgIcon(
    //   'launch',
    //   sanitizer.bypassSecurityTrustResourceUrl('../images/baseline-launch-24px.svg'));
    // )
   }

  ngOnInit() {
    this.getLocalArtists();
  }

  getLocalArtists() {
    this.artists = this.localDataService.getArtists();
    // this.test_track = this.localDataService.getTracks();
  }

}
