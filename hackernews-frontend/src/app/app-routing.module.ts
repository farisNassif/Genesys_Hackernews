import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryListComponent } from './story-list/story-list.component';

/* Available routes */
const routes: Routes = [
  /* Path that handles the best/top/new endpoints */
  { path: 'stories/:type', component: StoryListComponent },
  /* Default route */
  { path: '', pathMatch: 'full', redirectTo: 'stories/top' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
