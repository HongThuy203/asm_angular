import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product-service.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  products: IProduct = {
    id: 0,
    name: "",
    price: 0,
  }
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.products = product;
      }, error => console.log(error.message))
    })
  }
  onHandleSubmit() {
    this.productService.updateProduct(this.products).subscribe(product => {
      console.log(product);
    })
  }
}