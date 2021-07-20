import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor(private productService: ProductsService ,
    private router : Router
  ) {
  }
  products: Product[]
  product: Product = {
    id: Math.floor(Math.random() * 101),
    name: 'product 1',
    description: 'mo ta san pham',
    price: 0,
    quantity: 0,
    image: 'https://thuvienhuongdan.com/contents/upload/images/jean.k/images/meo/h4.png',
    status: true
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    })
  }
  addProduct() {
    this.productService.productAdd(this.product).subscribe(data => {
      this.products.push(data);
      this.router.navigateByUrl('/product');
    })
  }
}
