import { Component, OnInit } from '@angular/core';
import { IScrobble, IUpdate } from 'src/app/models';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recentScrobbles!: IScrobble[];
  recentUpdate!: IUpdate;

  constructor(private api: ApiService) {}

  ngOnInit(): void {

   this.api.getXRecentScrobbles(30).subscribe(
     (r: IScrobble[]) => {
       this.recentScrobbles = r;
      },
      (err: any) => alert(err)
    );

    this.api.getUpdate(2).subscribe(
      (r: IUpdate) => this.recentUpdate = r
    );

  }
}
