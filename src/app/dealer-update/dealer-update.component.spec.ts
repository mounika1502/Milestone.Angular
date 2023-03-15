import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerUpdateComponent } from './dealer-update.component';

describe('DealerUpdateComponent', () => {
  let component: DealerUpdateComponent;
  let fixture: ComponentFixture<DealerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
