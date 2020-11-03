import { TestBed } from '@angular/core/testing';

import { StoryService } from './story.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('StoryService', () => {
  const httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: httpClientMock },
    ]
  }));

  /* Creation */
  it('should be created', () => {
    const service: StoryService = TestBed.get(StoryService);
    expect(service).toBeTruthy();
  });

  /* Make sure stories are returned by type */
  it('#getStoriesByType should get stories by type from the hackernews api', () => {
    const service: StoryService = TestBed.get(StoryService);
    httpClientMock.get.and.returnValue(new Observable((o) => {
      o.next([123]); 
    }));
    service.getStoriesByType('new').then((data) => {
      expect(data).toEqual([123]);
      expect(service.stories).toEqual([123]);
    });
  });

  /* Make sure a story is returned as intended */
  it('#getStory should get a single story from the hackernews api', () => {
    const service: StoryService = TestBed.get(StoryService);
    httpClientMock.get.and.returnValue(new Observable((o) => { 
      o.next('test'); 
    }));
    service.getStory(123).subscribe((data) => {
      expect(data).toEqual('test');
    });
  });
});