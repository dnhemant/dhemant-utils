import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeSafe } from './pipe-safe';

describe('PipeSafe', () => {
  let component: PipeSafe;
  let fixture: ComponentFixture<PipeSafe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeSafe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeSafe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
