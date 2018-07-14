import { TestBed, inject } from '@angular/core/testing';

import { CourseOfferingService } from './course-offering.service';

describe('CourseOfferingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseOfferingService]
    });
  });

  it('should be created', inject([CourseOfferingService], (service: CourseOfferingService) => {
    expect(service).toBeTruthy();
  }));
});
