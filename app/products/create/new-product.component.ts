import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { IProduct } from '../product';
import { ProductService } from '../product.service';
import { NewProductDto } from "./new-product.dto";
import { ICategory } from "../categories/category";

@Component({
    selector: 'pm-new-product',
    templateUrl: 'app/products/create/new-product.component.html'
})

export class NewProductComponent {
    product: NewProductDto;
    productUrl: URL;
    errorMessage: string;
    categoryNameText: string;

    constructor(private _productService: ProductService, private router: Router) {
        this.product = new NewProductDto();
    }

    addProduct() {
        this._productService.addProduct(this.product)
            .subscribe(productUrl => this.productUrl = productUrl,
            error => this.errorMessage = <any>error);
        this.router.navigate(['products']);
    }

    cancel() {
        this.router.navigate(['products']);
    }

    onSelected(category: ICategory): void {
        this.product.CategoryId = category.Id;
        this.categoryNameText = category.Name;
        console.log("cat id: " + this.product.CategoryId);
    }
}