import { Component } from '@angular/core';
import { MealService } from "./diet/meals/index";
import { ProductService, CategoryService } from "./diet/products/index";

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
