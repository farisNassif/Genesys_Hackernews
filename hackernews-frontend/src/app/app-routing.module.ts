import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryListComponent } from './story-list/story-list.component';
import { DEFAULT_ENDPOINT } from './app.constants';

/* Available routes */
const routes: Routes = [
  /* Path that handles the best/top/new endpoints */
  { path: 'stories/:type', component: StoryListComponent },
  /* Default route */
  { path: '', pathMatch: 'full', redirectTo: DEFAULT_ENDPOINT},
  /* Not found path */
  { path: '**', redirectTo: DEFAULT_ENDPOINT }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
