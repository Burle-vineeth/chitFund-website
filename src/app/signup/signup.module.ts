import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { routes } from './signup.routes';
import { SignupComponent } from './signup/signup.component';
import { SignupLandingComponent } from './signup-landing/signup-landing.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    SignupComponent,
    SignupLandingComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    routes,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
})
export class SignupModule {}
