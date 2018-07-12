import { TestBed, inject } from '@angular/core/testing';

import { TrialService } from './trial.service';

describe('FreeTrialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrialService]
    });
  });

  it('should be created', inject([TrialService], (service: TrialService) => {
    expect(service).toBeTruthy();
  }));
});
