import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThietbiComponent } from './thietbi.component';

describe('ThietbiComponent', () => {
  let component: ThietbiComponent;
  let fixture: ComponentFixture<ThietbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThietbiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThietbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
