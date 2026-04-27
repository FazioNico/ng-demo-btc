import { TestBed } from '@angular/core/testing';

import { BTC } from './btc';

describe('BTC', () => {
  let service: BTC;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BTC);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
