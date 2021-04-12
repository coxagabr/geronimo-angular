import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqButtonComponent } from './hq-button.component';

describe('HqButtonComponent', () => {
  let component: HqButtonComponent;
  let fixture: ComponentFixture<HqButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HqButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
