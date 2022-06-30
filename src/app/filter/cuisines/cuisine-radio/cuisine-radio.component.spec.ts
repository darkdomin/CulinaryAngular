import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineRadioComponent } from './cuisine-radio.component';

describe('CuisineRadioComponent', () => {
  let component: CuisineRadioComponent;
  let fixture: ComponentFixture<CuisineRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisineRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
