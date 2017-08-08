import { Component } from '@angular/core';

import { ProductService } from './products/product.service';
import { MealService } from './meals/meal.service';
import { CategoryService } from './products/categories/category.service';

@Component({
    selector: 'pm-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `,
    providers: [
        ProductService,
        MealService,
        CategoryService]
})
export class AppComponent {
    pageTitle: string = 'Fit Diary';
}
