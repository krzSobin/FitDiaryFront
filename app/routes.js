"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_component_1 = require("./products/product-list.component");
var product_detail_component_1 = require("./products/product-detail.component");
var meal_list_component_1 = require("./meals/meal-list.component");
var welcome_component_1 = require("./home/welcome.component");
exports.appRoutes = [
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent },
    { path: 'meals', component: meal_list_component_1.MealListComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map