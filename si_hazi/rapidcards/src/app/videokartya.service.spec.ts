import { TestBed } from '@angular/core/testing';

import { VideokartyaService } from './videokartya.service';

describe('VideokartyaService', () => {
  let service: VideokartyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideokartyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
