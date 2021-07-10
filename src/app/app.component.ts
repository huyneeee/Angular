import { Component } from '@angular/core';
import { data } from 'src/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainning';
  products = data;
  addItem(event:any){
    this.products.push(event)
  }
}
