## Contents
* [About](#about)
* [Testing](#testing)
* [Future Improvements(#future-improvements)
* [Relevant Links](#relevant-links)

### About
Built with Angular 9, the aim of this project was to redesign and restructure the official [Hackernews](https://news.ycombinator.com/) front page with help from the [Hackernews API](https://github.com/HackerNews/API). 

#### Running the Program
Clone this repo and run `npm install` to install all the dependencies.

Once the dependencies are installed, you can run `npm start` to start the application.

App will be live at localhost:4200

### Testing
Clone this repo and run `ng test` to run the unit tests.

Running `ng test --no-watch --code-coverage` will also give an overview of the code covered by tests.

### Future Improvements
Conclusively, what was set out to be accomplished was achieved. However there is scope for improvement within the project, here are some areas I would change or improve in future iterations;

1. <b>Search Functionality</b> - The ability to search for specific keywords or articles is something I would like to see since it would smoothen the overall user experience.
2. <b>Additional Page Functionality</b> - There are areas of the page that could use some love, space on the page could be utilized allowing for additional components to exist alongside the stories.
3. <b>Test Coverage</b> - While the significant units of the application are covered by tests, there are areas that are lacking in testing, I would make sure to include at least some more tests to address this.
4. <b>Mobile Friendly</b> - Following deployment, I noticed that some features don't work as intended on mobile, especially the header. I would include some CSS/SCSS to make sure it appears as intended on mobile devices.

### Relevant Links
* [Hosted Project](https://frontend-hackernews.herokuapp.com/) 
* [Hackernews API](https://github.com/HackerNews/API)
