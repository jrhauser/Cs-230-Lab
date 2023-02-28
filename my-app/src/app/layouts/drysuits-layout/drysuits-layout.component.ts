import { Component } from '@angular/core';
import { ProductModel } from './product.model';
import { mock_list } from './mock_list';
@Component({
  selector: 'app-drysuits-layout',
  templateUrl: './drysuits-layout.component.html',
  styleUrls: ['./drysuits-layout.component.css']
})
export class DrySuitsLayoutComponent {
  title = 'Dry Tops';
  products: ProductModel [] = [];

  constructor(){
    for (var item of mock_list){
      this.products.push(item)
    }
  }
};
