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
  id: string = "0";
  blogSmallCardItens: any[] = [];

  constructor() {}

  ngOnInit(): void {
    const blogBigCard = objMock.data.filter((i) => i.isBig === true)[0];
    const blogSmallCard = objMock.data.filter((i) => i.isBig === false);

    this.imageCover = blogBigCard.img_url;
    this.cardTitle = blogBigCard.title;
    this.cardDescription = blogBigCard.description;
    this.id = blogBigCard.id;

    for (let item of blogSmallCard) {
      this.blogSmallCardItens.push(item);
    }

    console.log(this.blogSmallCardItens);
  }
}
