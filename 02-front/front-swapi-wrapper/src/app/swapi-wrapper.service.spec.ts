import { TestBed } from '@angular/core/testing';

import { SwapiWrapperService } from './swapi-wrapper.service';

describe('SwapiWrapperService', () => {
  let service: SwapiWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
