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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this._productUrl = 'http://localhost:55986/api/foodproducts/';
    }
    ProductService.prototype.getProducts = function (categoryId) {
        return this._http.get(this._productUrl, categoryId)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.getProduct = function (id) {
        return this._http.get(this._productUrl + id)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Product: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.addProduct = function (product) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._productUrl, product, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Return URL: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.editProduct = function (product) {
        return this._http.put(this._productUrl, product)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Return URL: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this._http.delete(this._productUrl + id)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Deleted product: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map