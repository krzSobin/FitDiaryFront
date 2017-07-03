"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_list_component_1 = require("./products/product-list.component");
var new_product_component_1 = require("./products/new-product.component");
var product_detail_component_1 = require("./products/product-detail.component");
var product_remover_component_1 = require("./products/product-remover.component");
var meal_list_component_1 = require("./meals/meal-list.component");
var welcome_component_1 = require("./home/welcome.component");
exports.appRoutes = [
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent },
    { path: 'product/delete/:id', component: product_remover_component_1.ProductRemoverComponent },
    { path: 'product-new', component: new_product_component_1.NewProductComponent },
    { path: 'meals', component: meal_list_component_1.MealListComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map