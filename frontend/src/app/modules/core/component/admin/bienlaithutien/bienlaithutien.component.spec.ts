import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienlaithutienComponent } from './bienlaithutien.component';

describe('BienlaithutienComponent', () => {
  let component: BienlaithutienComponent;
  let fixture: ComponentFixture<BienlaithutienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienlaithutienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienlaithutienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
