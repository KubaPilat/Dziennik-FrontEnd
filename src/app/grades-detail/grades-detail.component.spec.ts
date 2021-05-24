import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesDetailComponent } from './grades-detail.component';

describe('GradesDetailComponent', () => {
  let component: GradesDetailComponent;
  let fixture: ComponentFixture<GradesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
