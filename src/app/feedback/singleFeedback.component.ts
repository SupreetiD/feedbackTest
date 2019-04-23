import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../services/feedbackService';

@Component({
  selector: 'app-single-feedback',
  templateUrl: './singleFeedback.html'
})
export class SingleFeedbackComponent implements OnInit {
  singleFeed: any;

  constructor(public feedbackService: FeedbackService,

  ) {}

  ngOnInit() {
    this.singleFeed = this.feedbackService.storage;
  }
}
