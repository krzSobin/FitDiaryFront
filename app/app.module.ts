import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { MealListComponent } from './meals/meal-list.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', component: ProductDetailComponent },
            { path: 'meals', component: MealListComponent },
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ], { useHash: true })],
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductDetailComponent,
        MealListComponent,
        NavMenuComponent,
        WelcomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
