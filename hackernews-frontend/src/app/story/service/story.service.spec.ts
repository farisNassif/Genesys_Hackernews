import { TestBed } from '@angular/core/testing';

import { StoryService } from './story.service';
import { HttpClient } from '@angular/common/http';

describe('StoryService', () => {
  const httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: httpClientMock },
    ]
  }));

  it('should be created', () => {
    const service: StoryService = TestBed.get(StoryService);
    expect(service).toBeTruthy();
  });
});