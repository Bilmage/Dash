import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RatingsComponent } from './ratings/ratings.component';
import { FilecomplaintsComponent } from './filecomplaints/filecomplaints.component';
import { ForgotpasswordComponent } from './forgotpassword/forgot-password.component';
import { FooterComponent } from './footer/footer.component';
import { BusinessregistrationComponent } from './businessregistration/businessregistration.component';
import { BusinessaccreditationComponent } from './businessaccreditation/businessaccreditation.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { HeaderbannerComponent } from './headerbanner/headerbanner.component';
import { ContactsectionComponent } from './contactsection/contactsection.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { IndividualsectionComponent } from './individualsection/individualsection.component';
import { BusinesssectionComponent } from './businesssection/businesssection.component';
import { LogosComponent } from './logos/logos.component';
import { LandingsectionComponent } from './landingsection/landingsection.component';
import { AboutComponent } from './about/about.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CorevaluesComponent } from './corevalues/corevalues.component';
import { VisionsectionComponent } from './visionsection/visionsection.component';
import { MissionsectionComponent } from './missionsection/missionsection.component';
import { AboutbannerComponent } from './aboutbanner/aboutbanner.component';
import { AbouttextComponent } from './abouttext/abouttext.component';
import { DashboardsectionComponent } from './dashboardsection/dashboardsection.component';
import { DetailsComponent } from './details/details.component';
import { DetailssectionComponent } from './detailssection/detailssection.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AnalyticssectionComponent } from './analyticssection/analyticssection.component';
import { FeaturesComponent } from './features/features.component';
import { LogcomplaintComponent } from './logcomplaint/logcomplaint.component';
import { LogcomplaintsectionComponent } from './logcomplaintsection/logcomplaintsection.component';
import { ComplaintprocessComponent } from './complaintprocess/complaintprocess.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { CheckeligibilityComponent } from './checkeligibility/checkeligibility.component';
import { EligibilitysectionComponent } from './eligibilitysection/eligibilitysection.component';
import { BusinessprofileComponent } from './businessprofile/businessprofile.component';
import { BusinessprofilesectionComponent } from './businessprofilesection/businessprofilesection.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { BackToTopButtonComponent } from './back-to-top-button/back-to-top-button.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DatatableComponent } from './datatable/datatable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    RatingsComponent,
    FilecomplaintsComponent,
    ForgotpasswordComponent,
    FooterComponent,
    BusinessregistrationComponent,
    BusinessaccreditationComponent,
    ContactComponent,
    HeaderComponent,
    ButtonComponent,
    HeaderbannerComponent,
    ContactsectionComponent,
    TestimonyComponent,
    IndividualsectionComponent,
    BusinesssectionComponent,
    LogosComponent,
    LandingsectionComponent,
    AboutComponent,
    FaqsComponent,
    CorevaluesComponent,
    VisionsectionComponent,
    MissionsectionComponent,
    AboutbannerComponent,
    AbouttextComponent,
    DashboardsectionComponent,
    DetailsComponent,
    DetailssectionComponent,
    AnalyticsComponent,
    AnalyticssectionComponent,
    FeaturesComponent,
    LogcomplaintComponent,
    LogcomplaintsectionComponent,
    ComplaintprocessComponent,
    BottomnavComponent,
    CheckeligibilityComponent,
    EligibilitysectionComponent,
    BusinessprofileComponent,
    BusinessprofilesectionComponent,
    BusinesscardComponent,
    BackToTopButtonComponent,
    ErrorPageComponent,
    NavigationComponent,
    SidebarComponent,
    ResetpasswordComponent,
    DatatableComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
