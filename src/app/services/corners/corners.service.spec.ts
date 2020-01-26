import { TestBed } from '@angular/core/testing';

import { CornersService } from './corners.service';

describe('CornersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CornersService = TestBed.get(CornersService);
    expect(service).toBeTruthy();
  });
});
