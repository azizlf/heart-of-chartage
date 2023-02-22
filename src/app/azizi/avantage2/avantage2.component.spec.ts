import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avantage2Component } from './avantage2.component';

describe('Avantage2Component', () => {
  let component: Avantage2Component;
  let fixture: ComponentFixture<Avantage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Avantage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Avantage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
