import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongbaoFormComponent } from './thongbao-form.component';

describe('ThongbaoFormComponent', () => {
  let component: ThongbaoFormComponent;
  let fixture: ComponentFixture<ThongbaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongbaoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongbaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
