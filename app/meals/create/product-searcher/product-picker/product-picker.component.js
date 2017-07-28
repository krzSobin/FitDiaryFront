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
var product_in_meal_dto_1 = require("../../../productInMeal/product-in-meal.dto");
var ProductPickerComponent = (function () {
    function ProductPickerComponent() {
        this.onSelected = new core_1.EventEmitter();
    }
    ProductPickerComponent.prototype.selectProduct = function () {
        var selectedProduct = new product_in_meal_dto_1.ProductInMealDto(this.product, this.amountInGrams);
        this.onSelected.emit(selectedProduct);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProductPickerComponent.prototype, "onSelected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProductPickerComponent.prototype, "product", void 0);
    ProductPickerComponent = __decorate([
        core_1.Component({
            selector: 'product-picker',
            templateUrl: 'app/meals/create/product-searcher/product-picker/product-picker.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], ProductPickerComponent);
    return ProductPickerComponent;
}());
exports.ProductPickerComponent = ProductPickerComponent;
//# sourceMappingURL=product-picker.component.js.map