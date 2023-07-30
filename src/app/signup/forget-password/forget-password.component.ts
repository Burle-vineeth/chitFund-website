import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthhelperService } from 'src/app/commonhelper/authhelper/authhelper.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  forgotForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authhelper: AuthhelperService
  ) {}

  forgotPassword() {
    if (this.forgotForm.valid) {
      this.authhelper.forgotPassword(this.forgotForm.value).subscribe({
        next: (result) => {
          if (result) {
            this.openSnackBar('OTP Sent Successfully', 'Close');
            this.router.navigateByUrl('reset-password');
          } else {
            this.openSnackBar('Email Not Found', 'Close');
          }
        },
        error: (err) => {
          this.openSnackBar(err.message, 'Close');
        },
      });
    } else {
      this.openSnackBar('Details are Not Valid', 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  cancel() {
    this.router.navigateByUrl('login');
  }
}
