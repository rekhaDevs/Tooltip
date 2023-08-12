import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTooltipComponent } from './new-tooltip.component';

describe('CustomTooltipComponent', () => {
  let component: NewTooltipComponent;
  let fixture: ComponentFixture<NewTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
