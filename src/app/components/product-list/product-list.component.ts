import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: IProduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    }, error => console.log(error.message))
  }
  removeItem(id: any) {
    const confirm = window.confirm("Ban chac chan muon xoa chu ?");
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(item => item.id !== id);
      })

    }
  }
}

