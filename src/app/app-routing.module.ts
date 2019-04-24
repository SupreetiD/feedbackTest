import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackListComponent } from './feedbackList/feedback-list.component';
import { SingleFeedbackComponent } from './feedback/single-feedback.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeedbackListComponent
  },
  {
    path: 'feedback/:id',
    component: SingleFeedbackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
