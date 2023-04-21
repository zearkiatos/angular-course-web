/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CourseService } from './CourseService';

describe('Service: Course', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseService]
    });
  });

  it('should ...', inject([CourseService], (service: CourseService) => {
    expect(service).toBeTruthy();
  }));
});
