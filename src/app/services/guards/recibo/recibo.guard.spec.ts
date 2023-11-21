import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ReciboGuard } from './recibo.guard';

describe('reciboGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => new ReciboGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
