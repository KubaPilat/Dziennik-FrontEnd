import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendNoticeComponent } from './send-notice.component';

describe('SendNoticeComponent', () => {
  let component: SendNoticeComponent;
  let fixture: ComponentFixture<SendNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
