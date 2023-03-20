import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperDataComponent } from './shipper-data.component';

describe('ShipperDataComponent', () => {
  let component: ShipperDataComponent;
  let fixture: ComponentFixture<ShipperDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
