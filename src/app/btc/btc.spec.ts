import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTC } from './btc';

describe('BTC', () => {
  let component: BTC;
  let fixture: ComponentFixture<BTC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BTC],
    }).compileComponents();

    fixture = TestBed.createComponent(BTC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
