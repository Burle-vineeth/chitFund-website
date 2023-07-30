import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthhelperService } from 'src/app/commonhelper/authhelper/authhelper.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  resetFrom = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    otp: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authhelper: AuthhelperService
  ) {}

  reset() {
    if (this.resetFrom.valid) {
      this.authhelper.reset(this.resetFrom.value).subscribe({
        next: (result) => {
          if (result) {
            this.openSnackBar('Password Updated Successfully', 'Close');
            this.router.navigateByUrl('login');
          } else {
            this.openSnackBar('Either email or OTP is incorrect', 'Close');
          }
        },
        error: (err) => {
          this.openSnackBar(err, 'Close');
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

  cancel() {
    this.router.navigateByUrl('login');
  }
}
