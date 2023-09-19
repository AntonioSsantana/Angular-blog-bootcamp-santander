import { Component, OnInit } from '@angular/core';

// Mock
import objMock from '../../../mock/obj.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageCover: string = '';
  cardTitle: string = '';
  cardDescription: string = '';

  constructor() { }

  ngOnInit(): void {
    const blog = objMock.data.filter((i) => i.isBig === true);
  
    this.imageCover = blog[0].img_url;
    this.cardTitle = blog[0].title;
    this.cardDescription = blog[0].description;
  }

}
