import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BackandService } from '@backand/angular2-sdk';
import { AppRoutingModule }  from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArchivesComponent } from './archives/archives.component';
import { DetailsComponent } from './details/details.component';
import { TenantChecksComponent } from './tenant-checks/tenant-checks.component';
import { ProfileComponent } from './profile/profile.component';
import { FilesComponent } from './files/files.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ArchivesComponent,
    DetailsComponent,
    TenantChecksComponent,
    ProfileComponent,
    FilesComponent
  ],
  imports: [
    // JasperoAlertsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [BackandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
