import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpBtc } from './dump-btc';

describe('DumpBtc', () => {
  let component: DumpBtc;
  let fixture: ComponentFixture<DumpBtc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DumpBtc],
    }).compileComponents();

    fixture = TestBed.createComponent(DumpBtc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
