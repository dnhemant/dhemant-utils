import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTooltip } from './directive-tooltip';

describe('DirectiveTooltip', () => {
  let component: DirectiveTooltip;
  let fixture: ComponentFixture<DirectiveTooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveTooltip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveTooltip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
