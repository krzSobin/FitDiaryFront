import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel, AuthService } from "../index";

@Component({
    templateUrl: 'app/user/login/login.component.html',
    styleUrls: ['app/user/login/login.component.css']
})
export class LoginComponent {
    loginInvalid = false;
    loginModel: LoginModel;

    constructor(private authService: AuthService, private router:Router) {
        this.loginModel = new LoginModel();
    }

    login() {
        this.authService.loginUser(this.loginModel).subscribe(resp => {
            if (!resp) {
                this.loginInvalid = true;
            } else {
                this.router.navigate(['welcome']);
            }
        })
    }

    cancel() {
        this.router.navigate(['welcome']);
    }
}