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
var core_1 = require("@angular/core");
var product_service_1 = require("../../../products/product.service");
var product_in_meal_dto_1 = require("../../productInMeal/product-in-meal.dto");
var product_in_searcher_dto_1 = require("./product-in-searcher.dto");
var ProductSearcherComponent = (function () {
    function ProductSearcherComponent(_productService) {
        this._productService = _productService;
        this.onSelected = new core_1.EventEmitter();
    }
    ProductSearcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts(undefined)
            .subscribe(function (products) { return _this.populateProductsArray(products); }, function (error) { return _this.errorMessage = error; });
    };
    ProductSearcherComponent.prototype.selectProduct = function (product) {
        var selectedProduct = new product_in_meal_dto_1.ProductInMealDto(product);
        console.log(selectedProduct);
        this.onSelected.emit(selectedProduct);
    };
    ProductSearcherComponent.prototype.populateProductsArray = function (products) {
        this.products = new Array();
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            this.products.push(new product_in_searcher_dto_1.ProductInSearcherDto(product));
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProductSearcherComponent.prototype, "onSelected", void 0);
    ProductSearcherComponent = __decorate([
        core_1.Component({
            selector: 'product-searcher',
            templateUrl: 'app/meals/create/product-searcher/product-searcher.component.html'
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService])
    ], ProductSearcherComponent);
    return ProductSearcherComponent;
}());
exports.ProductSearcherComponent = ProductSearcherComponent;
//# sourceMappingURL=product-searcher.component.js.map