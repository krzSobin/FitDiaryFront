import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-new-product',
    templateUrl: 'app/products/new-product.component.html'
})

export class NewProductComponent {
    product: IProduct;
    productUrl: URL;
    errorMessage: string;

    constructor(private _productService: ProductService, private router: Router) {

    }

    addProduct(formValues: IProduct) {
        this._productService.addProduct(formValues)
            .subscribe(productUrl => this.productUrl = productUrl,
            error => this.errorMessage = <any>error);
        this.router.navigate(['products']);
    }

    cancel() {
        this.router.navigate(['products']);
    }
}