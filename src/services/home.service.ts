import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomResponse } from 'src/models/custom-response.model';

const API_END_POINT: string = 'https://tej-dev.s3.ap-southeast-1.amazonaws.com/hiring/sfed/assignment/recent-news';

@Injectable({
  providedIn: 'root'
})
export class HomeService{

  constructor(private http: HttpClient) { }

  public getData(): Observable<CustomResponse> {
    return this.http.get(API_END_POINT).pipe(catchError((error) => {
      console.log(error);
      return of(error);
    }));
  }
}
