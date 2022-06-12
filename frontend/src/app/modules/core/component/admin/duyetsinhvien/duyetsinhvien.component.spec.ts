import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetsinhvienComponent } from './duyetsinhvien.component';

describe('DuyetsinhvienComponent', () => {
  let component: DuyetsinhvienComponent;
  let fixture: ComponentFixture<DuyetsinhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyetsinhvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetsinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
