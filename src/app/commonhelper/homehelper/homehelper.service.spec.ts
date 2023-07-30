import { TestBed } from '@angular/core/testing';

import { HomehelperService } from './homehelper.service';

describe('HomehelperService', () => {
  let service: HomehelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomehelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
