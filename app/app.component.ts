import { Component } from '@angular/core';

import { ProductService } from './products/product.service';
import { MealService } from './meals/meal.service';

@Component({
    selector: 'pm-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
            <nav-menu></nav-menu>
            <pm-products></pm-products>
            <pm-meals></pm-meals>
        </div>
    `,
    providers: [
        ProductService,
        MealService]
})
export class AppComponent {
    pageTitle: string = 'Fit Diary';
}
