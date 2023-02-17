import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOffPlanComponent } from './product-off-plan.component';

describe('ProductOffPlanComponent', () => {
  let component: ProductOffPlanComponent;
  let fixture: ComponentFixture<ProductOffPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOffPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOffPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
