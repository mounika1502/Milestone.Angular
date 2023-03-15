import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawUpdateComponent } from './raw-update.component';

describe('RawUpdateComponent', () => {
  let component: RawUpdateComponent;
  let fixture: ComponentFixture<RawUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
