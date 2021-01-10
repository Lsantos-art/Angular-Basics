import { ProductService } from 'src/app/shared/service/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-products-form-dialog',
  templateUrl: './products-form-dialog.component.html',
  styleUrls: ['./products-form-dialog.component.css']
})
export class ProductsFormDialogComponent implements OnInit {

  public productForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProductsFormDialogComponent>,
    private fb: FormBuilder,
    public rest: ProductService
  ) {}


  ngOnInit(): void {
    this.productForm = this.fb.group({
      nome : ['', [Validators.required]],
      quantidade : ['', [Validators.required]],
      valor : ['', [Validators.required]]
    });
  }

  saveProduct() {
    this.rest.postProducts(this.productForm.value).subscribe(result => {
      this.dialogRef.close();
      this.productForm.reset();
    });
  }

  cancel(): void {
    this.productForm.reset();
    this.dialogRef.close();
  }

}
