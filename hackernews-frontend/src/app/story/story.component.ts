import { Component, OnInit, Input } from '@angular/core';
import { Story } from './story.interface';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  /* Allows data to be input into the child component from the parent component */
  @Input() story: Story;

  constructor() { }
  
  /**
   * Converts Unix Time into a readable format based
   * on the time the story was submitted in relation to
   * the current time. (Credit: https://stackoverflow.com/a/47253415)
   * 
   * @param unixTime Unix Time associated with a story
   * @returns A formatted approximate time of the story submittion based on the current time
   */
  getTimeAgo(unixTime: number): string{
    /* Time periods used to get an approximate time of submittion in relation to the current time */
    var periods = {
      month: 30 * 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      day: 24 * 60 * 60 * 1000,
      hour: 60 * 60 * 1000,
      minute: 60 * 1000
    };

    /**
     * @param timeCreated Timestamp created by converting Unix Time to a Date object
     * @returns a String containing the time period associated with the input paramater
     */
    function formatTime(timeCreated: any) {
      var diff = Date.now() - timeCreated;
    
      if (diff > periods.month) {
        return Math.floor(diff / periods.month) + " months ago by ";
      } else if (diff > periods.week) {
        return Math.floor(diff / periods.week) + " weeks ago by ";
      } else if (diff > periods.day) {
        return Math.floor(diff / periods.day) + " days ago by ";
      } else if (diff > periods.hour) {
        return Math.floor(diff / periods.hour) + " hours ago by ";
      } else if (diff > periods.minute) {
        return Math.floor(diff / periods.minute) + " minutes ago by ";
      }
      return "Just now";
    }

    /* Passing the current unix time into  */
    var timeStamp = new Date(unixTime * 1000);

    return (formatTime(timeStamp));
  }
}