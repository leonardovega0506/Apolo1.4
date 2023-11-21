import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { fotoGuard } from './foto.guard';

describe('fotoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => fotoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
