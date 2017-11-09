import { RegisterComponent, LoginComponent, ProfileComponent } from './index';

export const userRoutes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
]