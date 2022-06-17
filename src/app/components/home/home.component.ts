import { Component, OnInit } from '@angular/core';
import { IScrobble } from 'src/app/models';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recentScrobbles!: IScrobble[];

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.fuckDudes();
  }

  fuckDudes() {
   this.api.getXRecentScrobbles(30).subscribe((r: IScrobble[]) => {
     this.recentScrobbles = r;
   });
  }
}
