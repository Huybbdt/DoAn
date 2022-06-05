import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvienFormComponent } from './sinhvien-form.component';

describe('SinhvienFormComponent', () => {
  let component: SinhvienFormComponent;
  let fixture: ComponentFixture<SinhvienFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinhvienFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhvienFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
