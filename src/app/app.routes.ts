import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
  { path: '', component: AuthComponent, title: 'Login' },
  { path: 'Home', component: HomeComponent, title: 'Home' },
  { path: 'Singup', component: SignupComponent, title: 'SingUp' },
];
