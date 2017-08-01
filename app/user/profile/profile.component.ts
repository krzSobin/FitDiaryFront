import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/user/profile/profile.component.html',
})

export class ProfileComponent {

    constructor(private authService: AuthService, private router: Router) {

    }

    logout(): void {
        this.authService.logoutUser();
        this.router.navigateByUrl('/welcome');
    }
}