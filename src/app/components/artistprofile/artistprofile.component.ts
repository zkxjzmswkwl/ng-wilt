import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArtist, ICount, IScrobble, ISong } from 'src/app/models';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-artistprofile',
  templateUrl: './artistprofile.component.html',
  styleUrls: ['./artistprofile.component.scss']
})
export class ArtistProfileComponent implements OnInit {
  // TODO: Don't remember to assign each subscription to class fields, destroy in ngOnDestroy();
  artist!: IArtist;
  scrobbleCount!: ICount;
  recentScrobbles!: IScrobble[];
  topSongs!: ISong[];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    this.api.getArtistByName(this.route.snapshot.paramMap.get("name")).subscribe(
      (r: IArtist) => {
        this.artist = r;

        this.api.getArtistScrobbleCount(this.artist.id).subscribe((w: ICount) => this.scrobbleCount = w);
        this.api.getArtistsRecentScrobbles(this.artist.id).subscribe((x: IScrobble[]) => this.recentScrobbles = x);
        this.api.getArtistsTopSongs(this.artist.id).subscribe((y: ISong[]) => this.topSongs = y);
      },
      (err: any) => console.log(err));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
