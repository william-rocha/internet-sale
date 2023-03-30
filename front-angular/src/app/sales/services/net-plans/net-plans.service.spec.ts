import { TestBed } from '@angular/core/testing';

import { NetPlansService } from './net-plans.service';

describe('NetPlansService', () => {
  let service: NetPlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetPlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
