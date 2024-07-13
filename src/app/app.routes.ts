import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgot-password.component';
import { RatingsComponent } from './ratings/ratings.component';
import { FilecomplaintsComponent } from './filecomplaints/filecomplaints.component';
import { BusinessregistrationComponent } from './businessregistration/businessregistration.component';
import { BusinessaccreditationComponent } from './businessaccreditation/businessaccreditation.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { LogcomplaintComponent } from './logcomplaint/logcomplaint.component';
import { CheckeligibilityComponent } from './checkeligibility/checkeligibility.component';
import { BusinessprofileComponent } from './businessprofile/businessprofile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

export const appRoutes: Route[] = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'filecomplaints', component: FilecomplaintsComponent },
  { path: 'businessregistration', component: BusinessregistrationComponent },
  { path: 'businessaccreditation', component: BusinessaccreditationComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'logcomplaint', component: LogcomplaintComponent },
  { path: 'checkeligibility', component: CheckeligibilityComponent },
  { path: 'businessprofile', component: BusinessprofileComponent },
  {
    path: '**',
    component: ErrorPageComponent,
    data: { code: 404, message: 'Page not found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
