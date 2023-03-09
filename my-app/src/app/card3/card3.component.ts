import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css'],
})
export class Card3Component {
  @Input() img: string;
  @Input() imgDescription: string;
  @Input() title: string;
  @Input() description: string;
  @Input() buttonText: string;

  constructor() {
    this.img = 'No img found';
    this.imgDescription = 'No description';
    this.title = '';
    this.description = '';
    this.buttonText = '';
  }

  ngOnInit(): void {}
}
