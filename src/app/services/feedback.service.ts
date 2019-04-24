import {Http, Response, HttpModule, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedbackService  {
  /* storage is initialized to store the selected review.
  This prevents calling the API https://api.imcas.com/v1/feedbacks/{id}
  as the contents are similar.
  */
  storage: any = '';
  constructor(private http: Http) {
  }

  getFeedbacks(): Observable<any>  {
  return this.http.get('https://api.imcas.com/v1/feedbacks')
      .map((res: Response) => res.json());
  }
}
