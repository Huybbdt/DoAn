import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoadondiennuocFormComponent } from './hoadondiennuoc-form.component';

describe('HoadondiennuocFormComponent', () => {
  let component: HoadondiennuocFormComponent;
  let fixture: ComponentFixture<HoadondiennuocFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoadondiennuocFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoadondiennuocFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
