import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { MealListComponent } from './meals/meal-list.component';
import { NavMenuComponent } from './navmenu/navmenu.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListComponent },
            { path: 'meals', component: MealListComponent }
        ], { useHash: true })],
    declarations: [
        AppComponent,
        ProductListComponent,
        MealListComponent,
        NavMenuComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
