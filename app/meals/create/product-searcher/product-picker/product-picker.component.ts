import { Component, EventEmitter, Output, Input } from '@angular/core';

import { IProduct } from "../../../../products/index";
import { ProductInMealDto } from "../../../productInMeal/product-in-meal.dto";

@Component({
    selector: 'product-picker',
    templateUrl: 'app/meals/create/product-searcher/product-picker/product-picker.component.html'
})
export class ProductPickerComponent{
    amountInGrams: number;
    errorMessage: string;

    @Output() onSelected = new EventEmitter<ProductInMealDto>();
    @Input() product: IProduct;

    constructor() {}

    selectProduct(): void {
        let selectedProduct = new ProductInMealDto(this.product, this.amountInGrams);
        this.onSelected.emit(selectedProduct);
    }
}