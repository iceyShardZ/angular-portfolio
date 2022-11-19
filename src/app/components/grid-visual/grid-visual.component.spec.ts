import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridVisualComponent } from './grid-visual.component';

describe('GridVisualComponent', () => {
  let component: GridVisualComponent;
  let fixture: ComponentFixture<GridVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridVisualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
