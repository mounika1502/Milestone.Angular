import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRawmaterialComponent } from './add-rawmaterial.component';

describe('AddRawmaterialComponent', () => {
  let component: AddRawmaterialComponent;
  let fixture: ComponentFixture<AddRawmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRawmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRawmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
