import { Routes } from '@angular/router';
import { SigninComponent } from './views/signin/signin.component';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
  { path: '', component: SigninComponent, title: 'Sign-In' },
  { path: 'Home', component: HomeComponent, title: 'Home' },
  { path: 'Singup', component: SignupComponent, title: 'SingUp' },
];
