import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DatePickerModule} from 'ng2-datepicker-bootstrap';
import { HttpModule } from '@angular/http';
import { BackandService } from '@backand/angular2-sdk';
import { AppRoutingModule }  from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArchivesComponent } from './archives/archives.component';
import { DetailsComponent } from './details/details.component';
import { TenantChecksComponent } from './tenant-checks/tenant-checks.component';
import { FilesComponent } from './files/files.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    DashboardComponent,
    ArchivesComponent,
    DetailsComponent,
    TenantChecksComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BackandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
