import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
    templateUrl: 'app/user/profile/profile.component.html',
})

export class ProfileComponent implements OnInit {

    fullInfo: any;
    errorMessage: string;

    constructor(private authService: AuthService, private userService: UserService, private router: Router) {

    }

    logout(): void {
        this.authService.logoutUser();
        this.router.navigateByUrl('/welcome');
    }

    ngOnInit(): void {
        this.userService.getFullInfo()
            .subscribe(info => this.fullInfo = info,
            error => this.errorMessage = <any>error);
        console.log(this.fullInfo);
    }
}