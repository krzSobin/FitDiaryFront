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
var category_service_1 = require("../category.service");
var CategoryListComponent = (function () {
    function CategoryListComponent(_categoryService) {
        this._categoryService = _categoryService;
        this.onSelected = new core_1.EventEmitter();
        this.categories = [];
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; }, function (error) { return _this.errorMessage = error; });
    };
    CategoryListComponent.prototype.selectCategory = function (category) {
        console.log("wybrano" + category);
        this.onSelected.emit(category);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CategoryListComponent.prototype, "onSelected", void 0);
    CategoryListComponent = __decorate([
        core_1.Component({
            selector: 'category-list',
            templateUrl: 'app/diet/products/categories/list/category-list.component.html'
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=category-list.component.js.map