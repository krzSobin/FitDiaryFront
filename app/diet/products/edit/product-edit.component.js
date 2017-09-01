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
var product_edit_dto_1 = require("./product-edit.dto");
var EditProductComponent = (function () {
    function EditProductComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
        this.product = new product_edit_dto_1.EditProductDto();
    }
    EditProductComponent.prototype.editProduct = function () {
        var _this = this;
        this._productService.editProduct(this.product)
            .subscribe(function (productUrl) { return _this.productUrl = productUrl; }, function (error) { return _this.errorMessage = error; });
        this._router.navigate(['products']);
    };
    EditProductComponent.prototype.cancel = function () {
        this._router.navigate(['products']);
    };
    EditProductComponent.prototype.onSelected = function (category) {
        this.product.CategoryId = category.Id;
        this.categoryNameText = category.Name;
        console.log("cat id: " + this.product.CategoryId);
    };
    EditProductComponent = __decorate([
        core_1.Component({
            selector: 'pm-new-product',
            templateUrl: 'app/diet/products/edit/product-edit.component.html'
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router])
    ], EditProductComponent);
    return EditProductComponent;
}());
exports.EditProductComponent = EditProductComponent;
//# sourceMappingURL=product-edit.component.js.map