import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css'],
})
export class Card2Component {
  @Input() img: string;
  @Input() imgDescription: string;
  @Input() title: string;
  @Input() description: string;
  @Input() buttonText: string;
  @Input() price: string;

  constructor() {
    this.img = 'No img found';
    this.imgDescription = 'No description';
    this.title = '';
    this.description = '';
    this.buttonText = '';
    this.price = ' ';
  }

  ngOnInit(): void {}
}
