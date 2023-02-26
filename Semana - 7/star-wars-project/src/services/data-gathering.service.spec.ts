import { TestBed } from '@angular/core/testing';

import { DataGatheringService } from './data-gathering.service';

describe('DataGatheringService', () => {
  let service: DataGatheringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGatheringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
