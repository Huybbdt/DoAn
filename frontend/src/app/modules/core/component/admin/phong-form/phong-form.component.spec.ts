import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongFormComponent } from './phong-form.component';

describe('PhongFormComponent', () => {
  let component: PhongFormComponent;
  let fixture: ComponentFixture<PhongFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhongFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
