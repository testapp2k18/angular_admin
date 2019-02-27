import { TestBed, inject } from '@angular/core/testing';

import { ValidationServiceService } from './validation-service.service';

describe('ValidationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationServiceService]
    });
  });

  it('should ...', inject([ValidationServiceService], (service: ValidationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
