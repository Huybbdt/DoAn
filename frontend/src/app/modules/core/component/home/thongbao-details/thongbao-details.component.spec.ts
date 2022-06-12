import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongbaoDetailsComponent } from './thongbao-details.component';

describe('ThongbaoDetailsComponent', () => {
  let component: ThongbaoDetailsComponent;
  let fixture: ComponentFixture<ThongbaoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongbaoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongbaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
