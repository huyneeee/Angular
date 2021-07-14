import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  // product: Product = new Product();

  constructor(private productService : ProductsService) { }
  product : Product = {
    id : Math.floor(Math.random() * 101),
    name : 'product 1',
    description : 'mo ta san pham',
    price : 0,
    quantity : 0,
    image : 'https://thuvienhuongdan.com/contents/upload/images/jean.k/images/meo/h4.png',
    status : true 
  } 
  
  ngOnInit(): void {
  }
  addProduct(){
  //   this.productService.productAdd(this.product);
  }
}
