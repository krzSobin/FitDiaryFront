import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/user/login/login.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px; }
    `]
})
export class LoginComponent {
    loginInvalid = false;

    constructor(private authService: AuthService, private router:Router) {

    }

    login(formValues: any) {
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(resp => {
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