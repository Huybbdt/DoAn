import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienlaithutienFormComponent } from './bienlaithutien-form.component';

describe('BienlaithutienFormComponent', () => {
  let component: BienlaithutienFormComponent;
  let fixture: ComponentFixture<BienlaithutienFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienlaithutienFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienlaithutienFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
