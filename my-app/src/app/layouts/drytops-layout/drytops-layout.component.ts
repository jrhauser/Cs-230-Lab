import { Component } from '@angular/core';
import { ProductModel } from '../../card3/product.model';
import { mock_list } from '../../card3/mock_list';
@Component({
  selector: 'app-drytops-layout',
  templateUrl: './drytops-layout.component.html',
  styleUrls: ['./drytops-layout.component.css'],
})
export class DrytopsLayoutComponent {
  title = 'Dry Tops';
  products: ProductModel[] = [];

  constructor() {
    for (var item of mock_list) {
      this.products.push(item);
    }
  }
}
