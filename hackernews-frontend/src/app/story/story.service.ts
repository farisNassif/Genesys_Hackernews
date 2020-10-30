import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class StoryService {
  /** Will contain list of story ID's */
  stories: Array<number>;

  constructor(private http: HttpClient) { }

  /**
   * Retrieves stores based on filter type from the API
   *
   * @param storyType type of story
   * @returns promise which resolves when data is available
   */
  getStoriesByType(storyType: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`${BASE_URL}${storyType}stories.json`).subscribe((stories: Array<number>) => {
        this.stories = stories;
        resolve(stories);
      }, () => { reject(); });
    });
  }

  /**
   * Retrieves a single story by ID
   *
   * @param storyId story id
   */
  fetchStory(storyId: number) {
    return this.http.get(`${BASE_URL}item/${storyId}.json`);
  }
}