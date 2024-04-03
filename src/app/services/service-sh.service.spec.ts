import { TestBed } from '@angular/core/testing';

import { ServiceShService } from './service-sh.service';

describe('ServiceShService', () => {
  let service: ServiceShService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceShService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
