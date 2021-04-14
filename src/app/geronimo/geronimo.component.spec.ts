import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeronimoComponent } from './geronimo.component';

describe('GeronimoComponent', () => {
  let component: GeronimoComponent;
  let fixture: ComponentFixture<GeronimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeronimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeronimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
