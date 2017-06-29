"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var index_1 = require("./products/index");
var app_component_1 = require("./app.component");
var meal_list_component_1 = require("./meals/meal-list.component");
var navbar_component_1 = require("./nav/navbar.component");
var welcome_component_1 = require("./home/welcome.component");
var routes_1 = require("./routes");
var auth_service_1 = require("./user/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes, { useHash: true })
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.ProductListComponent,
            index_1.ProductDetailComponent,
            meal_list_component_1.MealListComponent,
            navbar_component_1.NavBarComponent,
            welcome_component_1.WelcomeComponent
        ],
        providers: [
            auth_service_1.AuthService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map