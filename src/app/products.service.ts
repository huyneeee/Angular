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
  productDelete(id: Number) : Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`)
  }
  productDetail(id: Number) : Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`)
  }
  productAdd(product:Product) : Observable<Product>{
    return this.http.post<Product>(this.api,product);
  }
  productEdit(product:Product) : Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`,product)
  }
}

