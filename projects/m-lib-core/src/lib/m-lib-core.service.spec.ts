import { TestBed } from '@angular/core/testing';

import { MLibCoreService } from './m-lib-core.service';

describe('MLibCoreService', () => {
  let service: MLibCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MLibCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
