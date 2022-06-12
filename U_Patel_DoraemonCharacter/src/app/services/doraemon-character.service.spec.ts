import { TestBed } from '@angular/core/testing';

import { DoraemonCharacterService } from './doraemon-character.service';

describe('DoraemonCharacterService', () => {
  let service: DoraemonCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoraemonCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
