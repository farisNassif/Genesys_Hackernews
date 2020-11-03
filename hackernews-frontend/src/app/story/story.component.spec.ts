import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryComponent } from './story.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

describe('StoryComponent', () => {
  let component: StoryComponent;
  let fixture: ComponentFixture<StoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatChipsModule],
      declarations: [StoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* Creation */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* Story object / display test */
  it('should display story details correctly', () => {
    component.story = { id: 1, title: 'test_story', url: 'https://www.youtube.com', descendants: 1, score: 999, by: 'testuser', time: 123 };
    fixture.detectChanges();
    const nativeElement: HTMLElement = fixture.nativeElement;
    /* Letting the test framework know which html elements are what */
    const title = nativeElement.querySelector('mat-card-title').textContent;
    const subtitle = nativeElement.querySelector('mat-card-subtitle').textContent;
    const url = nativeElement.querySelector('mat-card-subtitle:last-child').textContent;
    /* Expectations */
    expect(title).toContain('test_story');
    expect(subtitle).toContain('999 Points Submitted');
    expect(url).toContain('youtube.com');
  });

  /* Test unix time conversion */
  it('should correctly convert unixtime to a readable format', () => {
    expect(component.getTimeAgo(123)).toEqual("618 months ago by ");
    /* I would test more, but since it's time based the test would
      fail if ran in the future, since a unixtime representing 10
      seconds ago right now could equal to potentially 'weeks ago' 
      at some point in the future
    */
  });
});