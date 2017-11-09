import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationModel } from "../index";
import { UserService } from "../user.service";

@Component({
    templateUrl: 'app/user/register/register.component.html'
})

export class RegisterComponent {
    registrationModel: RegistrationModel;
    loading = false;

    constructor(private router: Router, private userService: UserService, ) {
        this.registrationModel = new RegistrationModel();
    }

    register() {
        this.loading = true;
        this.userService.register(this.registrationModel)
            .subscribe(
            data => {
                //this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                //this.alertService.error(error);
                this.loading = false;
            });
    }
}
