import { Component } from '@angular/core';
import { ProductModel } from '../../card1/product.model';
import { mock_list } from "../../card1/mock_list";
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  title = 'Immersion Research';
  products: ProductModel [] = [];

  constructor(){
    for (var item of mock_list){
      this.products.push(item)
    }
  }
}
