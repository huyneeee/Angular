import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // products = data;
  api = 'https://60eda5245958940017140908.mockapi.io/products'
  constructor(
    private http : HttpClient
  ) { }
  getProduct() : Observable<Product[]>{
    return this.http.get<Product[]>(this.api)
  }
  // productDelete(id: Number) {
  //   this.products = this.products.filter(ele => ele.id != id);
  //   return this.products
  // }
  // productDetail(product: Product){
  //   return product;
  // }
  // productAdd(product:Product){
  //   this.products.push(product);
  // }
}

