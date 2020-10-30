import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoryModel } from './story-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StoryService {

  constructor(private http: HttpClient) { }

  getAllStories(): Observable<Array<StoryModel>> {
    return this.http.get<Array<StoryModel>>('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty');
  }
}