import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArtist, ICount, IScrobble } from 'src/app/models';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-artistprofile',
  templateUrl: './artistprofile.component.html',
  styleUrls: ['./artistprofile.component.scss']
})
export class ArtistProfileComponent implements OnInit {
  artist!: IArtist;
  scrobbleCount!: ICount;
  recentScrobbles!: IScrobble[];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    this.api.getArtistByName(this.route.snapshot.paramMap.get("name")).subscribe(
      (r: IArtist) => {
        this.artist = r;

        this.api.getArtistScrobbleCount(this.artist.id).subscribe((x: ICount) => this.scrobbleCount = x);
        this.api.getArtistsRecentScrobbles(this.artist.id).subscribe((z: IScrobble[]) => this.recentScrobbles = z);
      },
      (err: any) => console.log(err));
  }

  ngOnInit(): void {}
}
