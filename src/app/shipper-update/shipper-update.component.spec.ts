import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperUpdateComponent } from './shipper-update.component';

describe('ShipperUpdateComponent', () => {
  let component: ShipperUpdateComponent;
  let fixture: ComponentFixture<ShipperUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
