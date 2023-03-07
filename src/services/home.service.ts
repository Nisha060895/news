import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_END_POINT: string = 'https://tej-dev.s3.ap-southeast-1.amazonaws.com/hiring/sfed/assignment/recent-news';

@Injectable({
  providedIn: 'root'
})
export class HomeService{

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(API_END_POINT);
  }
}
