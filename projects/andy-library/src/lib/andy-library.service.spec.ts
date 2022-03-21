import { TestBed } from '@angular/core/testing';

import { AndyLibraryService } from './andy-library.service';

describe('AndyLibraryService', () => {
  let service: AndyLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndyLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
