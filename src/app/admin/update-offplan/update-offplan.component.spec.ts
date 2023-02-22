import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOffplanComponent } from './update-offplan.component';

describe('UpdateOffplanComponent', () => {
  let component: UpdateOffplanComponent;
  let fixture: ComponentFixture<UpdateOffplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOffplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOffplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
