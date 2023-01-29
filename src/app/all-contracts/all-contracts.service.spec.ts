import { TestBed } from '@angular/core/testing';

import { AllContractsService } from './all-contracts.service';

describe('AllContractsService', () => {
  let service: AllContractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllContractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
