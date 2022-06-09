import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThietbiFormComponent } from './thietbi-form.component';

describe('ThietbiFormComponent', () => {
  let component: ThietbiFormComponent;
  let fixture: ComponentFixture<ThietbiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThietbiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThietbiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
