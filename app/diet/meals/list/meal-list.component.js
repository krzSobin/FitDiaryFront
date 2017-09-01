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
var index_1 = require("../index");
var MealListComponent = (function () {
    function MealListComponent(_mealService, router) {
        this._mealService = _mealService;
        this.router = router;
        this.pageTitle = "Posiłki";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    MealListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    MealListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mealService.getMeals()
            .subscribe(function (meals) { return _this.meals = meals; }, function (error) { return _this.errorMessage = error; });
    };
    MealListComponent = __decorate([
        core_1.Component({
            selector: 'pm-meals',
            templateUrl: 'app/diet/meals/list/meal-list.component.html'
        }),
        __metadata("design:paramtypes", [index_1.MealService, router_1.Router])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map