import { TestBed } from '@angular/core/testing';

import { ContractpartnerService } from './contractpartner.service';

describe('ContractpartnerService', () => {
  let service: ContractpartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractpartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
