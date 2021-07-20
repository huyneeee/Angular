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

  setModal : Boolean = false;

  productDetail: Product

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
   this.productsService.getProduct().subscribe(data=>{
     this.products = data;
   })
  }

  onHandleClick(id: Number) {
    this.productsService.productDelete(id).subscribe(data=>{
      this.products = this.products.filter(ele=>ele.id!=id)
    })

  }

  onHandleDetail(product: Product) {
      this.productDetail=product;
      this.setModal = true
    }
    handleCancelModal(){
      this.setModal = false
    }
}
