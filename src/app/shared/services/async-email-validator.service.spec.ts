import { TestBed } from '@angular/core/testing';

import { AsyncEmailValidatorService } from './async-email-validator.service';

describe('AsyncEmailValidatorService', () => {
  let service: AsyncEmailValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncEmailValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
