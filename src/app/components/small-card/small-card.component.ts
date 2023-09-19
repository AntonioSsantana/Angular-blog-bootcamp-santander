import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  imageCover: string = '';
  @Input()
  cardDescription: string = '';
  @Input()
  id: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
