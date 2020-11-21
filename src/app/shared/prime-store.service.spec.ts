import { TestBed } from '@angular/core/testing';

import { PrimeStoreService } from './prime-store.service';

describe('PrimeStoreService', () => {
  let service: PrimeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
