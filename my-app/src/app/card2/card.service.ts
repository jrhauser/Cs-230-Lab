import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  // private baseUrl: string = 'https://cs-230-lab-default-rtdb.firebaseio.com/';
  // private productsEndPoint = 'Cards.json';

  constructor(private db: AngularFireDatabase) {}

  getProducts() {
    return this.db.list<ProductModel>('Cards').valueChanges();
  }

  addProduct(product: ProductModel) {
    this.db.list<ProductModel>('Cards').push(product);
  }
}
