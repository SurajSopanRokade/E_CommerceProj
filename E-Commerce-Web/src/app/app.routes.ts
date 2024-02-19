import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { Home1Component } from './home1/home1.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    // {path:"", component:HomeComponent},
    {path:"Admin", component:AdminAuthComponent},
    {path:"AdminHome", component:AdminHomeComponent},
    {path:"Home", component:Home1Component},
    {path:"Login", component:LoginComponent},
    {path:"SignUp", component:SignUpComponent}
];
