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
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getAll = function () {
        return this._http.get('/api/users', this.setToken()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this._http.get('http://localhost:55986/api/users/' + id, this.setToken()).map(function (response) { return response.json(); });
    };
    UserService.prototype.register = function (registrationModel) {
        return this._http.post('http://localhost:55986/api/account/register', registrationModel).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this._http.put('/api/users/' + user.id, user, this.setToken()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this._http.delete('http://localhost:55986/api/users/' + id, this.setToken()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getUserData = function () {
        return this._http.get('http://localhost:55986/api/users/', this.setToken()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.setToken = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map