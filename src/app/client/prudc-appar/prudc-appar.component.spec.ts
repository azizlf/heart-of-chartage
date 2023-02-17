import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrudcApparComponent } from './prudc-appar.component';

describe('PrudcApparComponent', () => {
  let component: PrudcApparComponent;
  let fixture: ComponentFixture<PrudcApparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrudcApparComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrudcApparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
