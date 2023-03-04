import { Card } from 'src/models/card.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() sectionName: string;
  @Input() cardData: Card[];

  constructor() { }

  ngOnInit(): void {
  }

}
