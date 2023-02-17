import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerProductComponent } from './dealer-product.component';

describe('DealerProductComponent', () => {
  let component: DealerProductComponent;
  let fixture: ComponentFixture<DealerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
