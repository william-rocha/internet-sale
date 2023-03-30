import { TestBed } from '@angular/core/testing';

import { PagesValidatorService } from './pages-validator.service';

describe('PagesValidatorService', () => {
  let service: PagesValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
