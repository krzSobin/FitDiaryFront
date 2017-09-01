import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
    selector: 'pm-product-remover',
    templateUrl: 'app/diet/products/remove/product-remover.component.html'
})

export class ProductRemoverComponent implements OnInit {
    product: IProduct;
    productId: number;
    errorMessage: string;

    constructor(private _productService: ProductService, private _route: ActivatedRoute, private _router: Router) {}

    ngOnInit(): void {
        this.productId = +this._route.snapshot.params['id'];

        this._productService.getProduct(this.productId)
            .subscribe(product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    deleteProduct(id: number): void {
        this._productService.deleteProduct(id)
            .subscribe(product => this.product = product,
            error => this.errorMessage = <any>error);
        this._router.navigate(['products']);
    }
}