import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan1aComponent } from './plan1a.component';

describe('Plan1aComponent', () => {
  let component: Plan1aComponent;
  let fixture: ComponentFixture<Plan1aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Plan1aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
