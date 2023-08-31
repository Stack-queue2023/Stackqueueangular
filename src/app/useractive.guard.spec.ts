import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { useractiveGuard } from './useractive.guard';

describe('useractiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => useractiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
