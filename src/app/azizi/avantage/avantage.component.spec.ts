import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantageComponent } from './avantage.component';

describe('AvantageComponent', () => {
  let component: AvantageComponent;
  let fixture: ComponentFixture<AvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvantageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
