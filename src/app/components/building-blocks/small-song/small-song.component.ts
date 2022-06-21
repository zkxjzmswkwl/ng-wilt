import { Component, Input, OnInit } from '@angular/core';
import { ISong } from 'src/app/models';

@Component({
  selector: 'app-small-song',
  templateUrl: './small-song.component.html',
  styleUrls: ['./small-song.component.scss']
})
export class SmallSongComponent implements OnInit {
  @Input() songData!: ISong;
  @Input() songOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
