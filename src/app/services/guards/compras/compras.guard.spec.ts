import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { comprasGuard } from './compras.guard';

describe('comprasGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => comprasGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
