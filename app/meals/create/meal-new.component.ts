import { Component } from  '@angular/core';
import { Router } from '@angular/router';

import { MealService } from '../meal.service';
import { MealNewDto } from "./meal-new.dto";
import { ProductInMealDto } from "../productInMeal/product-in-meal.dto";

@Component({
    templateUrl: 'app/meals/create/meal-new.component.html'
})

export class MealNewComponent {
    meal: MealNewDto;
    mealUrl: URL;
    errorMessage: string;
    productSearcherVisible: boolean;

    constructor(private _mealService: MealService, private router: Router) {
        this.meal = new MealNewDto();
        this.productSearcherVisible = false;
    }

    addMeal() {
        this._mealService.add(this.meal)
            .subscribe(mealUrl => this.mealUrl = mealUrl,
            error => this.errorMessage = <any>error);
        this.router.navigate(['meals']);
    }

    cancel() {
        this.router.navigate(['meals']);
    }

    showProductSearcher(): void {
        this.productSearcherVisible = true;
    }

    hideProductSearcher(): void {
        this.productSearcherVisible = false;
    }

    onSelected(product: ProductInMealDto): void {
        this.meal.Products.push(product);
    }
}