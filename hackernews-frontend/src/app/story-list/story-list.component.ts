import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story/service/story.service';
import { ActivatedRoute } from '@angular/router';
import { Story } from '../story/interface/story.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  /** Array of stories */
  stories: Array<Story> = [];
  /** Boolean for checking if new stories are available */
  moreStories: boolean;
  /** Story index of next story */
  nextStoryIndex = 0;

  constructor(
    private storyService: StoryService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      /* Get the story type from the param (top/new/best) */
      const storyType: string = params.get('type');
      /* Call the Story service function, passing it the story type */
      this.storyService.getStoriesByType(storyType).then(() => {
        /* Initialize stores and nextStoryIndex */
        this.stories = [];
        this.nextStoryIndex = 0;
        /* Populate stores with the first (n) stories and update next story index to (..n + 1) */
        this.loadStories();
      });
    });
  }

  loadStories() {
    const storiesList = [];
    this.moreStories = (this.nextStoryIndex + 10) < this.storyService.stories.length;
    if (this.moreStories) {
      /* Load 10 more stories, for each loaded story ... */
      for (let i = this.nextStoryIndex; i < this.nextStoryIndex + 10; i++) {
        /* ... append(push) it to the story list */
        storiesList.push(this.storyService.getStory(this.storyService.stories[i]));
      }
      /* */
      forkJoin(storiesList).subscribe(
        (moreStories: Array<Story>) => {
          /* Spread operator used to merge current stories with more stories when invoked */
          this.stories = [...this.stories, ...moreStories];
          this.nextStoryIndex = this.nextStoryIndex + 10;
        }
      );
    }
  }
}
