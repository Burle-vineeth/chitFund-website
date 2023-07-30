import { RouterModule } from '@angular/router';
import { HomelandingComponent } from './homelanding/homelanding.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TandcComponent } from './tandc/tandc.component';
import { ProfileComponent } from './profile/profile.component';

const homeroutes: any = [
  {
    path: '',
    component: HomelandingComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'aboutUs', component: AboutusComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'terms-&-conditions', component: TandcComponent },
      {
        path: ':id',
        loadChildren: () =>
          import('../singleChit/single-chit.module').then(
            (m) => m.SingleChitModule
          ),
      },
    ],
  },
];

export const routes = RouterModule.forChild(homeroutes);
