import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LundingPageAziziComponent } from './lunding-page-azizi.component';

describe('LundingPageAziziComponent', () => {
  let component: LundingPageAziziComponent;
  let fixture: ComponentFixture<LundingPageAziziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LundingPageAziziComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LundingPageAziziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
