import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService, IProduct } from "../index";

@Component({
    templateUrl: 'app/diet/products/details/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    product: IProduct;
    errorMessage: string;

    constructor(private _productService: ProductService, private _route: ActivatedRoute, private _router: Router){

    }

    ngOnInit(): void {
        let productId = +this._route.snapshot.params['id'];

        this._productService.getProduct(productId)
            .subscribe(product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}