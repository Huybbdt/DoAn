import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoadondiennuocComponent } from './hoadondiennuoc.component';

describe('HoadondiennuocComponent', () => {
  let component: HoadondiennuocComponent;
  let fixture: ComponentFixture<HoadondiennuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoadondiennuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoadondiennuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
