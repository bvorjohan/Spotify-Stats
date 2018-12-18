import { Component, OnInit } from '@angular/core';

import { Track } from '../track';
import { LocalDataService } from '../local-data.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  tracks: Track[];

  constructor(private localDataService: LocalDataService) { }

  ngOnInit() {
    this.getLocalTracks();
  }

  getLocalTracks() {
    this.tracks = this.localDataService.getTracks();
    // this.test_track = this.localDataService.getTracks();
  }

  // tracks() {
  //   return this.tracks;
  // }
  //
  // test_track() {
  //   return this.test_track;
  // }

}
