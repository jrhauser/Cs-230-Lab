import { Component } from '@angular/core';
import { ProductModel } from './card1/product.model';
import { mock_list } from "./card1/mock_list";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Immersion Research';
  products: ProductModel [] = [];

  constructor(){
    for (var item of mock_list){
      this.products.push(item)
    }
  }
}
