import { TestBed } from '@angular/core/testing';

import { CheckinServiceService } from './checkin-service.service';

describe('CheckinServiceService', () => {
  let service: CheckinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
