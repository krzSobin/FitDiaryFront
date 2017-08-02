import { Component } from  '@angular/core';
import { Router } from '@angular/router';

import { MealService } from '../meal.service';
import { MealNewDto } from "./meal-new.dto";
import { ProductInMealDto } from "../productInMeal/product-in-meal.dto";
import { IMyDateModel, IMyDpOptions } from 'mydatepicker';

@Component({
    templateUrl: 'app/meals/create/meal-new.component.html'
})

export class MealNewComponent {
    private myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'yyyy-MM-dd',
        inline: true
    };

    meal: MealNewDto;
    mealUrl: URL;
    errorMessage: string;
    productSearcherVisible: boolean;

    constructor(private _mealService: MealService, private router: Router) {
        this.meal = new MealNewDto();
        this.productSearcherVisible = false;
    }

    addMeal() {
        console.log(this.meal);
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

    onDateChanged(event: IMyDateModel) {
        this.meal.Date = new Date(event.date.year, event.date.month - 1, event.date.day);
    }
}