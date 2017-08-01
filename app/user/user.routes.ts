import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const userRoutes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
]