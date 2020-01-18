import { TestBed } from '@angular/core/testing';

import { StationsApiService } from './stations-api.service';

describe('StationsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StationsApiService = TestBed.get(StationsApiService);
    expect(service).toBeTruthy();
  });
});
