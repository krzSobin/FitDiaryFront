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
var auth_service_1 = require("../auth.service");
var router_1 = require("@angular/router");
var user_service_1 = require("../user.service");
var ProfileComponent = (function () {
    function ProfileComponent(authService, userService, router) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
    }
    ProfileComponent.prototype.logout = function () {
        this.authService.logoutUser();
        this.router.navigateByUrl('/welcome');
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getFullInfo()
            .subscribe(function (info) { return _this.fullInfo = info; }, function (error) { return _this.errorMessage = error; });
        console.log(this.fullInfo);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/profile/profile.component.html',
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, user_service_1.UserService, router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map