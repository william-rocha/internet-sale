import { TestBed } from '@angular/core/testing';

import { CepCoverageService } from './cep-coverage.service';

describe('CepCoverageService', () => {
  let service: CepCoverageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepCoverageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
