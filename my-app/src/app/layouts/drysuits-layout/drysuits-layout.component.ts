import { Component } from '@angular/core';
import { ProductModel } from '../../card2/product.model';
import { ProductsService } from '../../card2/card.service';
@Component({
  selector: 'app-drysuits-layout',
  templateUrl: './drysuits-layout.component.html',
  styleUrls: ['./drysuits-layout.component.css'],
})
export class DrySuitsLayoutComponent {
  title = 'Dry Tops';
  products: ProductModel[] = [];

  constructor(private productservice: ProductsService) {}

  ngOnInit(): void {
    this.productservice.getProducts().subscribe((data: ProductModel[]) => {
      for (var x of data) {
        console.log(x);
        this.products.push(x);
      }
    });
  }
}
