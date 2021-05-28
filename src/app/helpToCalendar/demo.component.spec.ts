import { ComponentFixture, TestBed } from '@angular/core/testing';

import { helpToCalendar } from './demo.component';

describe('DemoComponent', () => {
  let component: helpToCalendar;
  let fixture: ComponentFixture<helpToCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ helpToCalendar ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(helpToCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
