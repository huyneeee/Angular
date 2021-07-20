import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  product : Product
  constructor(
    private activeRoute : ActivatedRoute,
    private productService : ProductsService
    ) { 
     this.activeRoute.params.subscribe(params=>{
        this.productService.productDetail(params.id).subscribe(data=>{
          this.product = data
        });
     });
       
  }

  ngOnInit(): void {
  }

}
