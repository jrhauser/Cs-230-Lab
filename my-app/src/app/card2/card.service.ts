import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model";


@Injectable(
    {providedIn: 'root'}
)
export class ProductsService{
    private baseUrl:string = "https://cs-230-lab-default-rtdb.firebaseio.com/";
    private productsEndPoint = "Cards.json";

    constructor(private http:HttpClient){

    }

    getProducts(){
        return this.http.get<ProductModel []>(this.baseUrl + this.productsEndPoint);
    }
}
