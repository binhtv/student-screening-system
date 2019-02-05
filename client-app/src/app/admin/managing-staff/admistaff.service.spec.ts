import { TestBed } from '@angular/core/testing';

import { AdmistaffService } from './admistaff.service';

describe('AdmistaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmistaffService = TestBed.get(AdmistaffService);
    expect(service).toBeTruthy();
  });
});
