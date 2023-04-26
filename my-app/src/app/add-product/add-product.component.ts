import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../card2/product.model';
import { ProductsService } from '../card2/card.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(private ps: ProductsService) {}

  ngOnInit(): void {}

  addItem(product: ProductModel) {
    console.log('You Clicked the button');
    console.log(product);
    this.ps.addProduct(product);
  }
}
