import { Component, OnInit,Input } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  // products: Product[] = data
  @Input () products : Product[] ;

  

  productDetail : Product

  constructor() {
   }

  ngOnInit(): void {
  }
  onHandleClick(id:Number){
    this.products = this.products.filter(ele=>ele.id!=id)
  }
  // onHandleClick(){
  //   console.log('click');
  //   this.product.status = !this.product.status;
  // }
  // onHandleKeyPress(e:any){
  //   this.product.content = e.target.value
  // }

  onHandleDetail(product:Product){
    this.productDetail = product
  }

}
