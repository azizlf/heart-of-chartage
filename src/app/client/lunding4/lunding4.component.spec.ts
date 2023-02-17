import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lunding4Component } from './lunding4.component';

describe('Lunding4Component', () => {
  let component: Lunding4Component;
  let fixture: ComponentFixture<Lunding4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lunding4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lunding4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
