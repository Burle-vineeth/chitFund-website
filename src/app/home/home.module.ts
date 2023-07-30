import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomelandingComponent } from './homelanding/homelanding.component';
import { FormsModule } from '@angular/forms';
import { routes } from './home.routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TandcComponent } from './tandc/tandc.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MaterialModule } from '../signup/material.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomelandingComponent,
    HeaderComponent,
    FooterComponent,
    TandcComponent,
    PrivacyPolicyComponent,
    AboutusComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    routes,
    HttpClientModule,
    MaterialModule,
  ],
})
export class HomeModule {}
