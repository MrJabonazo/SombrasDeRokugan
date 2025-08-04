import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [
            MatCardModule,
            MatInputModule,
            MatFormFieldModule,
            MatButtonModule,
            MatDividerModule
          ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  constructor(private router: Router) { }

  logIn = () => {
    this.router.navigate(['/Home']);
  }

  signUp = () => {
    this.router.navigate(['/Singup']);
  }

}
