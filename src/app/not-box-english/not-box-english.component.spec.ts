import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotBoxEnglishComponent } from './not-box-english.component';

describe('NotBoxEnglishComponent', () => {
  let component: NotBoxEnglishComponent;
  let fixture: ComponentFixture<NotBoxEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotBoxEnglishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotBoxEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
