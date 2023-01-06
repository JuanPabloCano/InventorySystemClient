import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
import { Product } from '../../../models/product/Product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.css' ]
})
export class ProductComponent implements OnInit {


  constructor(readonly productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    return this.productService.get().subscribe(data => {
      this.productService.products = data;
    });
  }

  createProduct(form: NgForm) {
    if (form?.value.id) {
      this.productService.put(form.value)
        .subscribe(() => {
          this.getProducts();
          this.resetForm(form);
        });
    } else {
      this.productService.post(form.value).subscribe((res) => {
        this.getProducts();
        this.resetForm(form);
      });
    }
  }

  edit(product: Product) {
    console.log(product);
    this.productService.selectedProduct = product;
  }

  delete(id: string, form: NgForm) {
    if (confirm('Are you sure?')) {
      this.productService.delete(id).subscribe(() => {
        this.getProducts();
        this.resetForm(form);
      });
    }
  }

  public resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }
}
