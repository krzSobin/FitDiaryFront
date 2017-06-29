import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
    ProductListComponent,
    ProductDetailComponent
} from './products/index'
import { AppComponent } from './app.component';
import { MealListComponent } from './meals/meal-list.component';
import { NavBarComponent } from './nav/navbar.component';
import { WelcomeComponent } from './home/welcome.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductDetailComponent,
        MealListComponent,
        NavBarComponent,
        WelcomeComponent],
    providers: [
        AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
