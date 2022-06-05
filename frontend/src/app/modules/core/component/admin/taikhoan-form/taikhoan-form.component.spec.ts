import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaikhoanFormComponent } from './taikhoan-form.component';

describe('TaikhoanFormComponent', () => {
  let component: TaikhoanFormComponent;
  let fixture: ComponentFixture<TaikhoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaikhoanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaikhoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
