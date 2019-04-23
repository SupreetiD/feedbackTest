import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleFeedbackComponent } from './feedback/singleFeedback.component';
import { FeedbackListComponent } from './feedbackList/feedbackList.component';
import {FeedbackService} from './services/feedbackService';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackListComponent,
    SingleFeedbackComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [FeedbackService, FeedbackListComponent, SingleFeedbackComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
