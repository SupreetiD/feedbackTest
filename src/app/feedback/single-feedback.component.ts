/* Component for displaying one feedback */

import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../services/feedback.service';

@Component({
  selector: 'app-single-feedback',
  templateUrl: './single-feedback.component.html'
})
export class SingleFeedbackComponent implements OnInit {
  singleFeed: any;
  reviews: any;
  localeModel: any;
  selectedReview: any ;

  constructor(public feedbackService: FeedbackService,

  ) {}

  ngOnInit() {
    this.singleFeed = this.feedbackService.storage;
    this.reviews = this.feedbackService.storage.translations;
    this.selectedReview = this.feedbackService.storage.translations[0].content;
    this.localeModel = this.feedbackService.storage.translations[0].locale;
  }

  updateSelectedValue(event: any) {
    const me: any = this;
    (me.reviews).forEach(function(review: any) {
      if (review.locale === event ) {
        me.selectedReview = review.content;
      }
    });
  }
}
