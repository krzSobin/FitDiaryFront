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
var forms_1 = require("@angular/forms");
var index_1 = require("./diet/products/index");
var index_2 = require("./diet/meals/index");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./nav/navbar.component");
var welcome_component_1 = require("./home/welcome.component");
var routes_1 = require("./routes");
var auth_service_1 = require("./user/auth.service");
var user_service_1 = require("./user/user.service");
var mydatepicker_1 = require("mydatepicker");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ngx_bootstrap_2 = require("ngx-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                mydatepicker_1.MyDatePickerModule,
                http_1.HttpModule,
                ngx_bootstrap_1.BsDropdownModule.forRoot(),
                ngx_bootstrap_2.ButtonsModule.forRoot(),
                router_1.RouterModule.forRoot(routes_1.appRoutes, { useHash: true })
            ],
            declarations: [
                app_component_1.AppComponent,
                index_1.ProductListComponent,
                index_1.ProductDetailComponent,
                index_1.NewProductComponent,
                index_1.CategoryListComponent,
                index_1.ProductRemoverComponent,
                index_2.MealNewComponent,
                index_2.MealListComponent,
                index_2.ProductSearcherComponent,
                navbar_component_1.NavBarComponent,
                welcome_component_1.WelcomeComponent
            ],
            providers: [
                auth_service_1.AuthService,
                user_service_1.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map