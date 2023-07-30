import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthhelperService } from 'src/app/commonhelper/authhelper/authhelper.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    terms: ['', Validators.required],
  });
  @ViewChild('cpassword') cpassword: any;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private http: HttpClient,
    private authhelper: AuthhelperService
  ) {}

  signup() {
    if (
      this.signupForm.valid &&
      this.signupForm.value.password == this.cpassword.nativeElement.value &&
      this.signupForm.value.terms
    ) {
      this.authhelper.registeruser(this.signupForm.value).subscribe((data) => {
        console.log(data);
      });
      this.openSnackBar('Registered Successfully', 'Close');
      setTimeout(() => {
        this.router.navigateByUrl('login');
      }, 3000);
    } else {
      if (
        this.signupForm.value.password != this.cpassword.nativeElement.value
      ) {
        this.openSnackBar('Please Confirm Your password', 'Close');
      } else {
        this.openSnackBar('Details are Not Valid', 'Close');
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  ngOnInit() {}

  login() {
    this.router.navigateByUrl('login');
  }
}
