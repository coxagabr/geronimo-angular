import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DddButtonComponent } from './ddd-button.component';

describe('DddButtonComponent', () => {
  let component: DddButtonComponent;
  let fixture: ComponentFixture<DddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DddButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
