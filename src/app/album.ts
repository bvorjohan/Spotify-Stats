import { Artist } from './artist';
import { ArtistLean } from './artist-lean';

export class Album {
  album_type: string;
  artists: ArtistLean[];
  external_urls: any;
  href: string;
  id: string;
  images: any;
  release_date: string;
  name: string;
  release_date_precision: string;
  type: string;
  uri: string

}
