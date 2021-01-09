import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/model/products.model';
import { ProductService } from 'src/app/shared/service/product.service';
import { LOCALE_ID } from '@angular/core';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  list!: Products;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
     this.getProducts();
  }

  getProducts() {
    this.productService.getProductsWithFlag('produtos').subscribe(data => {
      this.list = data;
      console.log(this.list)
    });
  }

}
