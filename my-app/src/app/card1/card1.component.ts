import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit{
  @Input() img: string;
  @Input() imgDescription: string;
  @Input() title: string;
  @Input() description: string;
  @Input() buttonText: string;

  constructor() {
    this.img ="No img found";
    this.imgDescription = "No description";
    this.title = "";
    this.description = "";
    this.buttonText = "";
  }

  ngOnInit(): void {
  }
}
