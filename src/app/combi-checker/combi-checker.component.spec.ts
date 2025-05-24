import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombiCheckerComponent } from './combi-checker.component';

describe('CombiCheckerComponent', () => {
  let component: CombiCheckerComponent;
  let fixture: ComponentFixture<CombiCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombiCheckerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombiCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
