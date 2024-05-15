import { TestBed } from '@angular/core/testing';

import { PacientesServiceService } from './pacientes-service.service';

describe('PacientesServiceService', () => {
  let service: PacientesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacientesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
