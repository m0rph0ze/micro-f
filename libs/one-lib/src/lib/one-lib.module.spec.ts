import { async, TestBed } from '@angular/core/testing';
import { OneLibModule } from './one-lib.module';

describe('OneLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OneLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OneLibModule).toBeDefined();
  });
});
