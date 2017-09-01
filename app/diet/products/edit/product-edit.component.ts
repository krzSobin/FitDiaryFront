import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { IProduct } from '../product';
import { ProductService } from '../product.service';
import { ICategory } from "../categories/category";
import { EditProductDto } from "./product-edit.dto";

@Component({
    selector: 'pm-new-product',
    templateUrl: 'app/diet/products/edit/product-edit.component.html'
})

export class EditProductComponent {
    product: EditProductDto;
    productUrl: URL;
    errorMessage: string;
    categoryNameText: string;

    constructor(private _productService: ProductService, private _router: Router) {
        this.product = new EditProductDto();
    }

    editProduct() {
        this._productService.editProduct(this.product)
            .subscribe(productUrl => this.productUrl = productUrl,
            error => this.errorMessage = <any>error);
        this._router.navigate(['products']);
    }

    cancel() {
        this._router.navigate(['products']);
    }

    onSelected(category: ICategory): void {
        this.product.CategoryId = category.Id;
        this.categoryNameText = category.Name;
        console.log("cat id: " + this.product.CategoryId);
    }
}