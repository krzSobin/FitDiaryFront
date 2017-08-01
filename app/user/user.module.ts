import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [

    ]
})

export class UserModule { }