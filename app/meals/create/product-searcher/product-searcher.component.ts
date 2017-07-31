import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ProductService } from "../../../products/product.service";
import { IProduct } from "../../../products/product";
import { ProductInMealDto } from "../../productInMeal/product-in-meal.dto";
import { ProductInSearcherDto } from "./product-in-searcher.dto";

@Component({
    selector: 'product-searcher',
    templateUrl: 'app/meals/create/product-searcher/product-searcher.component.html'
})
export class ProductSearcherComponent implements OnInit {

    products: ProductInSearcherDto[];

    errorMessage: string;
    @Output() onSelected = new EventEmitter<ProductInMealDto>();

    constructor(private _productService: ProductService) {

    }

    ngOnInit(): void {
        this._productService.getProducts(undefined)
            .subscribe(products => this.populateProductsArray(products),
            error => this.errorMessage = <any>error);

    }

    selectProduct(product: ProductInSearcherDto): void {
        let selectedProduct = new ProductInMealDto(product);
        console.log(selectedProduct);
        this.onSelected.emit(selectedProduct);
    }

    populateProductsArray(products: IProduct[]): void {
        this.products = new Array<ProductInSearcherDto>();

        for (let product of products) {
            this.products.push(new ProductInSearcherDto(product));
        }
    }
}