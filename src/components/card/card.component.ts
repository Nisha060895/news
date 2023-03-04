import { Card } from 'src/models/card.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardInfo: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
