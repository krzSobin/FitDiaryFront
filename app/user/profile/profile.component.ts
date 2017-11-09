import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { AuthService, UserData } from "../index";

@Component({
    templateUrl: 'app/user/profile/profile.component.html',
    styleUrls: ['app/user/profile/profile.component.css'],
})

export class ProfileComponent implements OnInit {

    userData: UserData;
    fullInfo: any;
    errorMessage: string;

    constructor(private authService: AuthService, private userService: UserService, private router: Router) {
        this.userData = new UserData();
    }

    logout(): void {
        this.authService.logoutUser();
        this.router.navigateByUrl('/welcome');
    }

    ngOnInit(): void {
        this.userService.getUserData()
            .subscribe(user => this.userData = user.AdditionalData,
            error => this.errorMessage = <any>error);
        console.log(this.userData);
    }
}