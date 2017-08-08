import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
    ProductListComponent,
    ProductDetailComponent,
    NewProductComponent,
    ProductRemoverComponent,
    CategoryListComponent
} from './products/index';

import {
    MealListComponent,
    MealNewComponent,
    ProductSearcherComponent
} from "./meals/index";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { WelcomeComponent } from './home/welcome.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { UserService } from './user/user.service';
import { MyDatePickerModule } from 'mydatepicker';
import { BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MyDatePickerModule,
        HttpModule,
        BsDropdownModule.forRoot(),
        RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductDetailComponent,
        NewProductComponent,
        CategoryListComponent,
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
