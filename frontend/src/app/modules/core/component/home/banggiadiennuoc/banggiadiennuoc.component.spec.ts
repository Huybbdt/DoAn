import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanggiadiennuocComponent } from './banggiadiennuoc.component';

describe('BanggiadiennuocComponent', () => {
  let component: BanggiadiennuocComponent;
  let fixture: ComponentFixture<BanggiadiennuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanggiadiennuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanggiadiennuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
