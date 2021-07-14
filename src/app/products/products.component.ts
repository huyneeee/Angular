import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';

import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // products: Product[] = data
  // @Input () products : Product[] ;
  products: Product[]



  productDetail: Product

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
   this.productsService.getProduct().subscribe(data=>{
     this.products = data;
   })
  }

  onHandleClick(id: Number) {

    // console.log('click delete');
    // this.products = this.productsService.productDelete(id);
    // this.products = this.products.filter(ele=>ele.id!=id)
  }

  // onHandleKeyPress(e:any){
  //   this.product.content = e.target.value
  // }

  onHandleDetail(product: Product) {
    // this.productDetail = this.productsService.productDetail(product);

    // this.productDetail = product
  }

}
