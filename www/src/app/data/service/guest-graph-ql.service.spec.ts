import { TestBed } from '@angular/core/testing';

import { GuestGraphQLService } from './guest-graph-ql.service';

describe('GuestGraphQLService', () => {
  let service: GuestGraphQLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestGraphQLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
