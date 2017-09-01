"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var product_service_1 = require("../product.service");
var new_product_dto_1 = require("./new-product.dto");
var NewProductComponent = (function () {
    function NewProductComponent(_productService, router) {
        this._productService = _productService;
        this.router = router;
        this.product = new new_product_dto_1.NewProductDto();
    }
    NewProductComponent.prototype.addProduct = function () {
        var _this = this;
        this._productService.addProduct(this.product)
            .subscribe(function (productUrl) { return _this.productUrl = productUrl; }, function (error) { return _this.errorMessage = error; });
        this.router.navigate(['products']);
    };
    NewProductComponent.prototype.cancel = function () {
        this.router.navigate(['products']);
    };
    NewProductComponent.prototype.onSelected = function (category) {
        this.product.CategoryId = category.Id;
        this.categoryNameText = category.Name;
        console.log("cat id: " + this.product.CategoryId);
    };
    NewProductComponent = __decorate([
        core_1.Component({
            selector: 'pm-new-product',
            templateUrl: 'app/diet/products/create/new-product.component.html'
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router])
    ], NewProductComponent);
    return NewProductComponent;
}());
exports.NewProductComponent = NewProductComponent;
//# sourceMappingURL=new-product.component.js.map