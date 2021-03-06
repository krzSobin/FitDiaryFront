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
var MealService = (function () {
    function MealService(_http) {
        this._http = _http;
        this._mealUrl = 'http://localhost:55986/api/meals';
    }
    MealService.prototype.getMeals = function () {
        return this._http.get(this._mealUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MealService.prototype.add = function (meal) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        console.log(meal.Date);
        var token = this.getToken();
        if (token != null) {
            headers.append('Authorization', token);
        }
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._mealUrl, meal, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Return URL: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MealService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    MealService.prototype.getToken = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var result = 'Bearer ' + currentUser.token;
            return result;
        }
        return null;
    };
    MealService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MealService);
    return MealService;
}());
exports.MealService = MealService;
//# sourceMappingURL=meal.service.js.map