import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourbeCercleComponent } from './courbe-cercle.component';

describe('CourbeCercleComponent', () => {
  let component: CourbeCercleComponent;
  let fixture: ComponentFixture<CourbeCercleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourbeCercleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourbeCercleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
