import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})

export class StoryService {
  /** Array of numbers that will contain story ID's */
  stories: Array<number>;

  constructor(private http: HttpClient) { }

  /**
   * Retrieves stores based on filter type from the API
   *
   * @param storyType type of story
   * @returns promise which resolves when data is available
   */
  getStoriesByType(storyType: string) {
    return new Promise((resolve) => {
      this.http.get(`${API_BASE_URL}${storyType}stories.json`).subscribe((stories: Array<number>) => {
        this.stories = stories;
        resolve(stories);
      });
    });
  }

  /**
   * Retrieves a single story by ID
   *
   * @param storyId story id
   */
  getStory(storyId: number) {
    return this.http.get(`${API_BASE_URL}item/${storyId}.json`);
  }
}