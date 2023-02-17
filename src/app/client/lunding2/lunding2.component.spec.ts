import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lunding2Component } from './lunding2.component';

describe('Lunding2Component', () => {
  let component: Lunding2Component;
  let fixture: ComponentFixture<Lunding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lunding2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lunding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
