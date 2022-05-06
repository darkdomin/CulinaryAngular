import { TestBed } from '@angular/core/testing';

import { FilterNameService } from '../filter/meals/filter-name.service';

describe('FilterNameService', () => {
  let service: FilterNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
