import { Component } from '@angular/core';

import { ProductService } from './products/product.service';
import { MealService } from './meals/meal.service';

@Component({
    selector: 'pm-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `,
    providers: [
        ProductService,
        MealService]
})
export class AppComponent {
    pageTitle: string = 'Fit Diary';
}
