import { TestBed } from '@angular/core/testing';

import { carteService } from './carte.service';

describe('carteService', () => {
  let service: carteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(carteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
