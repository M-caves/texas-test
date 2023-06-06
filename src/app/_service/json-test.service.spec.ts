/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonTestService } from './json-test.service';

describe('Service: JsonTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonTestService]
    });
  });

  it('should ...', inject([JsonTestService], (service: JsonTestService) => {
    expect(service).toBeTruthy();
  }));
});
