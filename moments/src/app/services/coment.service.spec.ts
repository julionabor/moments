import { TestBed } from '@angular/core/testing';

import { ComentService } from './comment.service';

describe('ComentService', () => {
  let service: ComentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
