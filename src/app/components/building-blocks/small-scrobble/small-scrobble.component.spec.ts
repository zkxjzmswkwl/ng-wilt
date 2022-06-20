import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallScrobbleComponent } from './small-scrobble.component';

describe('SmallScrobbleComponent', () => {
  let component: SmallScrobbleComponent;
  let fixture: ComponentFixture<SmallScrobbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallScrobbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallScrobbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
