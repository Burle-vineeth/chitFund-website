import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupLandingComponent } from './signup-landing/signup-landing.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const authroutes: any = [
  {
    path: '',
    component: SignupLandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
    ],
  },
];
export const routes = RouterModule.forChild(authroutes);
