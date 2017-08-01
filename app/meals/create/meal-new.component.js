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
var router_1 = require("@angular/router");
var meal_service_1 = require("../meal.service");
var meal_new_dto_1 = require("./meal-new.dto");
var MealNewComponent = (function () {
    function MealNewComponent(_mealService, router) {
        this._mealService = _mealService;
        this.router = router;
        this.meal = new meal_new_dto_1.MealNewDto();
        this.productSearcherVisible = false;
    }
    MealNewComponent.prototype.addMeal = function () {
        var _this = this;
        this._mealService.add(this.meal)
            .subscribe(function (mealUrl) { return _this.mealUrl = mealUrl; }, function (error) { return _this.errorMessage = error; });
        this.router.navigate(['meals']);
    };
    MealNewComponent.prototype.cancel = function () {
        this.router.navigate(['meals']);
    };
    MealNewComponent.prototype.showProductSearcher = function () {
        this.productSearcherVisible = true;
    };
    MealNewComponent.prototype.hideProductSearcher = function () {
        this.productSearcherVisible = false;
    };
    MealNewComponent.prototype.onSelected = function (product) {
        this.meal.Products.push(product);
    };
    MealNewComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/meals/create/meal-new.component.html'
        }),
        __metadata("design:paramtypes", [meal_service_1.MealService, router_1.Router])
    ], MealNewComponent);
    return MealNewComponent;
}());
exports.MealNewComponent = MealNewComponent;
//# sourceMappingURL=meal-new.component.js.map