/* Component for displaying all the feedbacks together */

import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../services/feedback.service';
import { SingleFeedbackComponent } from '../feedback/single-feedback.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
})
export class FeedbackListComponent implements OnInit {
  feedbacks: object;

  constructor(
    public feedbackService: FeedbackService,
    public singleFeedback: SingleFeedbackComponent,
    private router: Router

  ) {}

  ngOnInit() {
    this.feedbackService.getFeedbacks().subscribe (
    (feedbacks: any) => {
      this.feedbacks = feedbacks.data;
    },
    (error: any) => {
      console.error('Error with loading list of feedbacks');
    });
  }

  onSelect(feedback: any) {
    this.feedbackService.storage = feedback;
    this.router.navigate(['/feedback/' + this.feedbackService.storage.id])
  }
}
