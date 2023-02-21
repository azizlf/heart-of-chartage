import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAppComponent } from './survey-app.component';

describe('SurveyAppComponent', () => {
  let component: SurveyAppComponent;
  let fixture: ComponentFixture<SurveyAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
