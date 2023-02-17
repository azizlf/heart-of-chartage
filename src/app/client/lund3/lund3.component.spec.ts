import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lund3Component } from './lund3.component';

describe('Lund3Component', () => {
  let component: Lund3Component;
  let fixture: ComponentFixture<Lund3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lund3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lund3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
