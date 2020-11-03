import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryListComponent } from './story-list.component';
import { StoryComponent } from '../story/story.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('StoryListComponent', () => {
  let component: StoryListComponent;
  let fixture: ComponentFixture<StoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressBarModule, MatCardModule, HttpClientModule, RouterTestingModule],
      declarations: [ StoryListComponent, StoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* Creation */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});