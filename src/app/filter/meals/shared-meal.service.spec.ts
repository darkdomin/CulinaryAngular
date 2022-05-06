import { TestBed } from '@angular/core/testing';

import { SharedMealService } from './shared-meal.service';

describe('SharedMealService', () => {
  let service: SharedMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
