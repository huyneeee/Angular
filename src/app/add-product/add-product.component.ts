import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../products/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<Product>()
  constructor() { }
  product : Product = {
    id : Math.floor(Math.random() * 101),
    name : 'product 1',
    description : 'mo ta san pham',
    price : 0,
    img : 'https://thuvienhuongdan.com/contents/upload/images/jean.k/images/meo/h4.png',
    status : true
  }
  ngOnInit(): void {
  }
  addProduct(){
    this.newItemEvent.emit(this.product);
  }
}
