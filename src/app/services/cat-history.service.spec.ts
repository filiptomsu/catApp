import { TestBed } from '@angular/core/testing';

import { CatHistoryService } from './cat-history.service';

describe('CatHistoryService', () => {
  let service: CatHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
