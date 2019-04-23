import {Http, Response, HttpModule, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedbackService  {
  storage: any = '';
  constructor(private http: Http) {
  }

  getFeedbacks(): Observable<any>  {
  return this.http.get('http://api.imcas.com/v1/feedbacks')
      .map((res: Response) => res.json());
  }
}
