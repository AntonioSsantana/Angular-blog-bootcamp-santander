import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imageCover: string = '';
  contentTitle: string = '';
  contentArticle: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
