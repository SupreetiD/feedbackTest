import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../services/feedbackService';
import { SingleFeedbackComponent } from '../feedback/singleFeedback.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedbackList.html',
})
export class FeedbackListComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  feedbacks: any;
  singlefb: any;

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
