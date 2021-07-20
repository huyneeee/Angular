import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product : Product
  constructor(
    private productService : ProductsService ,
    private router : Router,
    private activeRoute : ActivatedRoute
  ) {
    this.activeRoute.params.subscribe(params=>{
      this.productService.productDetail(params.id).subscribe(data=>{
        this.product = data
      });
   });
   }

  ngOnInit(): void {
    
  }
  onhandleSubmit(){
    this.productService.productEdit(this.product).subscribe(data=>{
      this.router.navigateByUrl('/product')
    })
  }


}
