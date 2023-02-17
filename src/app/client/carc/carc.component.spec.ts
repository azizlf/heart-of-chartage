import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcComponent } from './carc.component';

describe('CarcComponent', () => {
  let component: CarcComponent;
  let fixture: ComponentFixture<CarcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
