import { TestBed } from '@angular/core/testing';

import { ShapecolorService } from './shapecolor.service';

describe('ShapecolorService', () => {
  let service: ShapecolorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShapecolorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
