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
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/of");
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser && this.currentUser.token;
    }
    AuthService.prototype.loginUser = function (userName, password) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = new URLSearchParams();
        params.set('Username', userName);
        params.set('Password', password);
        params.set('grant_type', 'password');
        var body = params.toString();
        return this._http.post('http://localhost:55986/token', body, options)
            .do(function (resp) {
            if (resp) {
                var name_1 = resp.json().userName;
                var accessToken = resp.json().access_token;
                localStorage.setItem('currentUser', JSON.stringify({ username: name_1, token: accessToken }));
            }
        }).catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of(false);
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        console.log(!this.token);
        return !!this.token;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map