import { Component, OnInit } from '@angular/core';
import { StoryModel } from '../shared/story-model';
import { StoryService } from '../shared/story.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stories: Array<StoryModel> = [];

  constructor(private postService: StoryService) {
    this.postService.getAllStories().subscribe(story => {
      this.stories = story;
    });
  }

  ngOnInit(): void {
    
  }

}
