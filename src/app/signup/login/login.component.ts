import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthhelperService } from 'src/app/commonhelper/authhelper/authhelper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  forgotPassword: any = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authhelper: AuthhelperService
  ) {}

  login() {
    if (this.loginForm.valid) {
      this.forgotPassword = false;
      this.authhelper.loginuser(this.loginForm.value).subscribe({
        next: (result) => {
          if (result) {
            this.openSnackBar('Login Successful', 'Close');
            this.router.navigateByUrl('home');
          } else {
            this.openSnackBar('Either email or password is incorrect', 'Close');
            this.forgotPassword = true;
          }
        },
        error: (err) => {
          this.openSnackBar(err, 'Close');
          this.forgotPassword = true;
        },
      });
      // this.openSnackBar('Registered Successfully', 'Close');
    } else {
      this.openSnackBar('Details are Not Valid', 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  registerPage() {
    this.router.navigateByUrl('/signup');
  }

  forgotPasswordPage() {
    this.router.navigateByUrl('/forget-password');
  }
}
