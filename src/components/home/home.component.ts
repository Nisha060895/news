import { Component, OnInit } from '@angular/core';

import { CustomResponse } from 'src/models/custom-response.model';
import { HomeService } from 'src/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public newsData: Object = {};
  public sectionsList: Array<string>;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getNewsData();
  }

  // Fetch news data for the home page
  private getNewsData(): void {
    // Change structure of the reponse object
    this.homeService.getData().subscribe((data: CustomResponse) => {
      data.record.record.forEach(x => {
        this.newsData[x.primaryTag] = this.newsData[x.primaryTag] ? (
          this.newsData[x.primaryTag].length < 3 ? [...this.newsData[x.primaryTag], x] : this.newsData[x.primaryTag])
           : [x];
      });
      // this.sectionsList = Object.keys(this.newsData);
      this.sectionsList = ['Government', 'Tourism', 'Lifestyle', 'Events'];
    });
  }

}
