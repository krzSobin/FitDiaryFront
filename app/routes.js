"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var welcome_component_1 = require("./home/welcome.component");
var index_1 = require("./products/index");
var index_2 = require("./meals/index");
exports.appRoutes = [
    { path: 'products', component: index_1.ProductListComponent },
    { path: 'product/new', component: index_1.NewProductComponent },
    { path: 'product/:id', component: index_1.ProductDetailComponent },
    { path: 'product/delete/:id', component: index_1.ProductRemoverComponent },
    { path: 'meals', component: index_2.MealListComponent },
    { path: 'meals/new', component: index_2.MealNewComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map