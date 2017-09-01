import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IMeal, MealService } from "../index";

@Component({
    selector: 'pm-meals',
    templateUrl: 'app/diet/meals/list/meal-list.component.html'
})

export class MealListComponent implements OnInit {

    pageTitle: string = "Posiłki";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    meals: IMeal[];
    errorMessage: string;

    constructor(private _mealService: MealService, private router: Router){ }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._mealService.getMeals()
            .subscribe(meals => this.meals = meals,
            error => this.errorMessage = <any>error);
    }
}