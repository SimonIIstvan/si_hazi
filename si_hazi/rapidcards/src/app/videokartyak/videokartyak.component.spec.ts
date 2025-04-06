import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideokartyakComponent } from './videokartyak.component';

describe('VideokartyakComponent', () => {
  let component: VideokartyakComponent;
  let fixture: ComponentFixture<VideokartyakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideokartyakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideokartyakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
