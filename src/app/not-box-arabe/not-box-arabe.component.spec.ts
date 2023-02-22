import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotBoxArabeComponent } from './not-box-arabe.component';

describe('NotBoxArabeComponent', () => {
  let component: NotBoxArabeComponent;
  let fixture: ComponentFixture<NotBoxArabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotBoxArabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotBoxArabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
