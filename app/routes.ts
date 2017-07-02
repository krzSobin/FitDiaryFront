import { Routes } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { NewProductComponent } from './products/new-product.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { MealListComponent } from './meals/meal-list.component';
import { WelcomeComponent } from './home/welcome.component';

export const appRoutes = [
    { path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'product-new', component: NewProductComponent },
    { path: 'meals', component: MealListComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
]