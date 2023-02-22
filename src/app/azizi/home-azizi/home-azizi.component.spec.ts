import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAziziComponent } from './home-azizi.component';

describe('HomeAziziComponent', () => {
  let component: HomeAziziComponent;
  let fixture: ComponentFixture<HomeAziziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAziziComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAziziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
