"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MealNewDto = (function () {
    function MealNewDto() {
        this.Products = new Array();
    }
    MealNewDto.prototype.getTotalProtein = function () {
        var result = 0;
        for (var _i = 0, _a = this.Products; _i < _a.length; _i++) {
            var product = _a[_i];
            result += product.totalProteins;
        }
        return result;
    };
    MealNewDto.prototype.getTotalFat = function () {
        var result = 0;
        for (var _i = 0, _a = this.Products; _i < _a.length; _i++) {
            var product = _a[_i];
            result += product.totalFat;
        }
        return result;
    };
    MealNewDto.prototype.getTotalCarbo = function () {
        var result = 0;
        for (var _i = 0, _a = this.Products; _i < _a.length; _i++) {
            var product = _a[_i];
            result += product.totalCarbo;
        }
        return result;
    };
    MealNewDto.prototype.getTotalSugar = function () {
        var result = 0;
        for (var _i = 0, _a = this.Products; _i < _a.length; _i++) {
            var product = _a[_i];
            result += product.totalSugar;
        }
        return result;
    };
    MealNewDto.prototype.getTotalKCal = function () {
        var result = 0;
        for (var _i = 0, _a = this.Products; _i < _a.length; _i++) {
            var product = _a[_i];
            result += product.totalKCal;
        }
        return result;
    };
    return MealNewDto;
}());
exports.MealNewDto = MealNewDto;
//# sourceMappingURL=meal-new.dto.js.map