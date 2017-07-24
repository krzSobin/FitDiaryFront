import { Component } from  '@angular/core';
import { Router } from '@angular/router';
import { IMeal } from '../meal';
import { MealService } from '../meal.service';

@Component({
    //template: `<p>aaaaaa</p>`
    templateUrl: 'app/meals/create/meal-new.component.html'
})

export class MealNewComponent {
    meal: IMeal;
    mealUrl: URL;
    errorMessage: string;

    constructor(private _mealService: MealService, private router: Router) { }

    addMeal(formValues: IMeal) {
        console.log("blaaa");
        this._mealService.add(formValues)
            .subscribe(mealUrl => this.mealUrl = mealUrl,
            error => this.errorMessage = <any>error);
        this.router.navigate(['meals']);
    }

    cancel() {
        this.router.navigate(['meals']);
    }
}