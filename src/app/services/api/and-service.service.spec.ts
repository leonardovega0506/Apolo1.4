import { TestBed } from '@angular/core/testing';

import { AndService } from './and.service';

describe('AndServiceService', () => {
  let service: AndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
