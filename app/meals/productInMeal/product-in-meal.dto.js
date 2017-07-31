"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductInMealDto = (function () {
    function ProductInMealDto(product) {
        this.productId = product.id;
        this.amountInGrams = product.amountInGrams;
        this.name = product.name;
        this.category = product.category;
        this.totalProteins = product.proteinsPer100g * this.amountInGrams / 100;
        this.totalFat = product.fatsPer100g * this.amountInGrams / 100;
        this.totalCarbo = product.carboPer100g * this.amountInGrams / 100;
        this.totalSugar = product.sugarPer100g * this.amountInGrams / 100;
        this.totalKCal = product.kCalPer100g * this.amountInGrams / 100;
    }
    return ProductInMealDto;
}());
exports.ProductInMealDto = ProductInMealDto;
//# sourceMappingURL=product-in-meal.dto.js.map