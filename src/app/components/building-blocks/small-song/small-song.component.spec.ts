import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSongComponent } from './small-song.component';

describe('SmallSongComponent', () => {
  let component: SmallSongComponent;
  let fixture: ComponentFixture<SmallSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
