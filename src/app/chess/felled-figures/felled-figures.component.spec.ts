import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FelledFiguresComponent } from './felled-figures.component';

describe('FelledFiguresComponent', () => {
  let component: FelledFiguresComponent;
  let fixture: ComponentFixture<FelledFiguresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FelledFiguresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FelledFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
