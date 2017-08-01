"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_component_1 = require("./profile/profile.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
exports.userRoutes = [
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent }
];
//# sourceMappingURL=user.routes.js.map