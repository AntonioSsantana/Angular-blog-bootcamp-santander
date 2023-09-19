import { Component, OnInit } from '@angular/core';

// Mock
import objMock from '../../../mock/obj.json';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  imageCover: string = '';
  cardTitle: string = '';
  cardDescription: string = '';

  constructor() {}

  ngOnInit(): void {
    const blog = objMock.data.filter((i) => i.isBig === true);
  
    this.imageCover = blog[0].img_url;
    this.cardTitle = blog[0].title;
    this.cardDescription = blog[0].description;
  }
}
