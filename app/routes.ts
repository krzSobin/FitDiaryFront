import { Routes } from '@angular/router';

import { ProductDetailComponent } from './products/product-detail.component';
import { ProductRemoverComponent } from './products/product-remover.component';
import { WelcomeComponent } from './home/welcome.component';
import { NewProductComponent, ProductListComponent } from "./products/index";
import { MealListComponent, MealNewComponent } from "./meals/index";

export const appRoutes = [
    { path: 'products', component: ProductListComponent },
    { path: 'product/new', component: NewProductComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'product/delete/:id', component: ProductRemoverComponent },
    { path: 'meals', component: MealListComponent },
    { path: 'meals/new', component: MealNewComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
]