"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductInMealDto = (function () {
    function ProductInMealDto(product, amountInGrams) {
        this.productId = product.Id;
        this.amountInGrams = amountInGrams;
        this.name = product.Name;
        this.category = product.Category;
        this.totalProteins = product.ProteinsPer100g * amountInGrams / 100;
        this.totalFat = product.FatsPer100g * amountInGrams / 100;
        this.totalCarbo = product.CarboPer100g * amountInGrams / 100;
        this.totalSugar = product.SugarPer100g * amountInGrams / 100;
        this.totalKCal = product.KCalPer100g * amountInGrams / 100;
    }
    return ProductInMealDto;
}());
exports.ProductInMealDto = ProductInMealDto;
//# sourceMappingURL=product-in-meal.dto.js.map