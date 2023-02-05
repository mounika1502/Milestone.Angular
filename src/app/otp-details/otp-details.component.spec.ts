import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpDetailsComponent } from './otp-details.component';

describe('OtpDetailsComponent', () => {
  let component: OtpDetailsComponent;
  let fixture: ComponentFixture<OtpDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
