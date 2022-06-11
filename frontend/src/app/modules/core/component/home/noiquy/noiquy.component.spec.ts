import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiquyComponent } from './noiquy.component';

describe('NoiquyComponent', () => {
  let component: NoiquyComponent;
  let fixture: ComponentFixture<NoiquyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoiquyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiquyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
