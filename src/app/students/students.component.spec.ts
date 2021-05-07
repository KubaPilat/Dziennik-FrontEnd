import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudentsComponent } from './sudents.component';

describe('SudentsComponent', () => {
  let component: SudentsComponent;
  let fixture: ComponentFixture<SudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
