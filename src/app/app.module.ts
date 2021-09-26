import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, Router, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ReportComponent } from './home/report/report.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { UserServiceService } from './services/user-service.service';
import { ExamComponent } from './user/exam/exam.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const appRoutes: Routes = [
  { path:'', component: HomePageComponent },
  { path:'home-page', component: HomePageComponent },
  { path:'about-us', component: AboutUsComponent },
  { path:'report-page', component: ReportComponent },
  { path:'user/login', component: UserLoginComponent},
  { path:'user/register', component: UserRegisterComponent},
  { path:'user/exam', component: ExamComponent}
  
]

@NgModule({
  declarations: [	
    AppComponent,
    HomePageComponent,
      NavBarComponent,
      AboutUsComponent,
      ReportComponent,
      UserLoginComponent,
      UserRegisterComponent,
      ExamComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserServiceService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
