import { async, TestBed } from '@angular/core/testing';
import { BasketLibModule } from './basket-lib.module';

describe('BasketLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BasketLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BasketLibModule).toBeDefined();
  });
});
