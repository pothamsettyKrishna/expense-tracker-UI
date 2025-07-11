import { Routes } from '@angular/router';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'form', component: ExpenseFormComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
];
