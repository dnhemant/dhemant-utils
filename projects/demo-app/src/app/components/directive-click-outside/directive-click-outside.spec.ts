import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveClickOutside } from './directive-click-outside';

describe('DirectiveClickOutside', () => {
  let component: DirectiveClickOutside;
  let fixture: ComponentFixture<DirectiveClickOutside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveClickOutside]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveClickOutside);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
