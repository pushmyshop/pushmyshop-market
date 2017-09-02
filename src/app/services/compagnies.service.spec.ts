import { TestBed, inject } from '@angular/core/testing';

import { CompagniesService } from './compagnies.service';

describe('CompagniesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompagniesService]
    });
  });

  it('should be created', inject([CompagniesService], (service: CompagniesService) => {
    expect(service).toBeTruthy();
  }));
});
