import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketNameComponent } from './basket-name.component';

describe('BasketNameComponent', () => {
  let component: BasketNameComponent;
  let fixture: ComponentFixture<BasketNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
