import { Album } from './album';
import { Artist } from './artist';
import { ArtistLean } from './artist-lean';

export class Track {
  album: Album;
  artists: ArtistLean[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: any;
  external_urls: any;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  // duration: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  popularity: number;
  // artists: Artist[];


  //
  // constructor(name: string) {
  //   this.name = name;
  // }

  // getNames():string[] {
  //   return ['1','3'];
    // let names = string[];
    // for (var item of this.artists) {
    //   names.push(item);
    // }
    // return names;
  // }


}
