import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongbaoListComponent } from './thongbao-list.component';

describe('ThongbaoListComponent', () => {
  let component: ThongbaoListComponent;
  let fixture: ComponentFixture<ThongbaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongbaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongbaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
