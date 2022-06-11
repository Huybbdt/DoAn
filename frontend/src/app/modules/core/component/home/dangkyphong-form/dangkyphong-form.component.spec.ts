import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangkyphongFormComponent } from './dangkyphong-form.component';

describe('DangkyphongFormComponent', () => {
  let component: DangkyphongFormComponent;
  let fixture: ComponentFixture<DangkyphongFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangkyphongFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangkyphongFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
