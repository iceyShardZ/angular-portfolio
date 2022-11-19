import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackParallelogramComponent } from './black-parallelogram.component';

describe('BlackParallelogramComponent', () => {
  let component: BlackParallelogramComponent;
  let fixture: ComponentFixture<BlackParallelogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackParallelogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackParallelogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
