import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducVilaComponent } from './produc-vila.component';

describe('ProducVilaComponent', () => {
  let component: ProducVilaComponent;
  let fixture: ComponentFixture<ProducVilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducVilaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducVilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
