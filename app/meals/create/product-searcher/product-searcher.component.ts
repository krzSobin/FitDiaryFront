import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ProductService } from "../../../products/product.service";
import { IProduct } from "../../../products/product";
import { ProductInMealDto } from "../../productInMeal/product-in-meal.dto";

@Component({
    selector: 'product-searcher',
    templateUrl: 'app/meals/create/product-searcher/product-searcher.component.html'
})
export class ProductSearcherComponent implements OnInit {
    
    products: IProduct[];

    errorMessage: string;
    @Output() onAdded = new EventEmitter<ProductInMealDto>();

    constructor(private _productService: ProductService) {

    }

    onSelected(product: ProductInMealDto) {
        console.log(product);
        this.onAdded.emit(product);
    }

    ngOnInit(): void {
        this._productService.getProducts(undefined)
            .subscribe(products => this.products = products,
            error => this.errorMessage = <any>error);

    }
}