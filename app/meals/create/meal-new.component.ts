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

    constructor(private _mealService: MealService, private router: Router) {
        this.meal = new MealNewDto();
    }

    addMeal(formValues: MealNewDto) {
        this._mealService.add(formValues)
            .subscribe(mealUrl => this.mealUrl = mealUrl,
            error => this.errorMessage = <any>error);
        this.router.navigate(['meals']);
    }

    cancel() {
        this.router.navigate(['meals']);
    }

    onAdded(product: ProductInMealDto) {
        this.meal.Products.push(product);
    }
}