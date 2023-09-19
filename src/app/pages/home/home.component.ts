import { Component, OnInit } from '@angular/core';

// Mock
import objMock from '../../../mock/obj.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imageCover: string = '';
  cardTitle: string = '';
  cardDescription: string = '';
  id: number = 0;
  blogSmallCardItens: any[] = [];

  constructor() {}

  ngOnInit(): void {
    const blogBigCard = objMock.data.filter((i) => i.isBig === true);
    const blogSmallCard = objMock.data.filter((i) => i.isBig === false);

    this.imageCover = blogBigCard[0].img_url;
    this.cardTitle = blogBigCard[0].title;
    this.cardDescription = blogBigCard[0].description;
    this.id = blogBigCard[0].id;

    for (let item of blogSmallCard) {
      this.blogSmallCardItens.push(item);
    }

    console.log(this.blogSmallCardItens);
  }
}
