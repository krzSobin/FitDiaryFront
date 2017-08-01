import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
    ProductListComponent,
    ProductDetailComponent,
    NewProductComponent,
    ProductRemoverComponent
} from './products/index'
import { AppComponent } from './app.component';
import { MealListComponent } from './meals/meal-list.component';
import { MealNewComponent } from './meals/create/meal-new.component';
import { ProductSearcherComponent } from './meals/create/product-searcher/product-searcher.component';
import { NavBarComponent } from './nav/navbar.component';
import { WelcomeComponent } from './home/welcome.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { UserService } from './user/user.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductDetailComponent,
        NewProductComponent,
        ProductRemoverComponent,
        MealNewComponent,
        MealListComponent,
        ProductSearcherComponent,
        NavBarComponent,
        WelcomeComponent],
    providers: [
        AuthService,
        UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
