import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IScrobble } from 'src/app/models';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  usernameQuery!: string;
  scrobbles!: IScrobble[];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
    ) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has("username")) {
      // @ts-ignore
      this.usernameQuery = this.route.snapshot.paramMap.get("username");

      // @ts-ignore
      this.api.getScrobblesByUser(this.usernameQuery).subscribe((r: IScrobble[]) => {
        this.scrobbles = r;
      });
    }
  }
}
