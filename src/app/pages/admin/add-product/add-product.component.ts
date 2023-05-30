import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product-service.service';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  products: IProduct = {
    id: 0,
    name: "",
    price: 0
  }
  constructor(
    private productService: ProductService) {

  }
  onHandleSubmit() {
    this.productService.addProduct(this.products).subscribe(product => {
      console.log(product);
    })
  }
}
