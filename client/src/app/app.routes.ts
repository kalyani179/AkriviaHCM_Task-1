import { Routes } from '@angular/router';

import { HomeComponent } from './dashboard/home/home.component';
import { RegisterComponent } from './dashboard/register/register.component';
import { LoginComponent } from './dashboard/login/login.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
];

