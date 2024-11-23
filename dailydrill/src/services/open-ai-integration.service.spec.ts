import { TestBed } from '@angular/core/testing';

import { OpenAIIntegrationService } from './open-ai-integration.service';

describe('OpenAIIntegrationService', () => {
  let service: OpenAIIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAIIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
