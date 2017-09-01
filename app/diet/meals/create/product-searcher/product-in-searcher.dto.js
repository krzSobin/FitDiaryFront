"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductInSearcherDto = (function () {
    function ProductInSearcherDto(product) {
        this.id = product.Id;
        this.name = product.Name;
        this.proteinsPer100g = product.ProteinsPer100g;
        this.fatsPer100g = product.FatsPer100g;
        this.carboPer100g = product.CarboPer100g;
        this.sugarPer100g = product.SugarPer100g;
        this.kCalPer100g = product.KCalPer100g;
        this.category = product.Category;
    }
    return ProductInSearcherDto;
}());
exports.ProductInSearcherDto = ProductInSearcherDto;
//# sourceMappingURL=product-in-searcher.dto.js.map