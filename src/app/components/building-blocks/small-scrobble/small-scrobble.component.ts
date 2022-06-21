import { Component, Input, OnInit } from '@angular/core';
import { IScrobble } from '../../../models';

@Component({
  selector: 'app-small-scrobble',
  templateUrl: './small-scrobble.component.html',
  styleUrls: ['./small-scrobble.component.scss']
})
export class SmallScrobbleComponent implements OnInit {
  @Input() scrobbleData!: IScrobble;
  @Input() songOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
